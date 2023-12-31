import { ArrowDownIcon, ArrowForwardIcon, ArrowUpIcon } from '@chakra-ui/icons'
import type { ResponsiveValue } from '@chakra-ui/react'
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  Tooltip,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react'
import { KeplrHDWallet } from '@shapeshiftoss/hdwallet-keplr/dist/keplr'
import type { Property } from 'csstype'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslate } from 'react-polyglot'
import { useHistory } from 'react-router'
import { MessageOverlay } from 'components/MessageOverlay/MessageOverlay'
import { TradeAssetSelect } from 'components/MultiHopTrade/components/AssetSelection'
import { RateGasRow } from 'components/MultiHopTrade/components/RateGasRow'
import { SlippagePopover } from 'components/MultiHopTrade/components/SlippagePopover'
import { TradeAssetInput } from 'components/MultiHopTrade/components/TradeAssetInput'
import { ReceiveSummary } from 'components/MultiHopTrade/components/TradeConfirm/ReceiveSummary'
import { DonationCheckbox } from 'components/MultiHopTrade/components/TradeInput/components/DonationCheckbox'
import { ManualAddressEntry } from 'components/MultiHopTrade/components/TradeInput/components/ManualAddressEntry'
import { getSwapperSupportsSlippage } from 'components/MultiHopTrade/components/TradeInput/getSwapperSupportsSlippage'
import { getMixpanelEventData } from 'components/MultiHopTrade/helpers'
import { useActiveQuoteStatus } from 'components/MultiHopTrade/hooks/quoteValidation/useActiveQuoteStatus'
import { checkApprovalNeeded } from 'components/MultiHopTrade/hooks/useAllowanceApproval/helpers'
import { useGetTradeQuotes } from 'components/MultiHopTrade/hooks/useGetTradeQuotes/useGetTradeQuotes'
import { TradeRoutePaths } from 'components/MultiHopTrade/types'
import { SlideTransition } from 'components/SlideTransition'
import { Text } from 'components/Text'
import { useErrorHandler } from 'hooks/useErrorToast/useErrorToast'
import { useModal } from 'hooks/useModal/useModal'
import { useToggle } from 'hooks/useToggle/useToggle'
import { useWallet } from 'hooks/useWallet/useWallet'
import type { Asset } from 'lib/asset-service'
import { bn, bnOrZero, positiveOrZero } from 'lib/bignumber/bignumber'
import { getMixPanel } from 'lib/mixpanel/mixPanelSingleton'
import { MixPanelEvents } from 'lib/mixpanel/types'
import {
  selectSwappersApiTradeQuotePending,
  selectSwappersApiTradeQuotes,
} from 'state/apis/swappers/selectors'
import {
  selectBuyAsset,
  selectManualReceiveAddressIsValidating,
  selectSellAmountCryptoPrecision,
  selectSellAsset,
} from 'state/slices/selectors'
import { swappers } from 'state/slices/swappersSlice/swappersSlice'
import {
  selectActiveQuote,
  selectActiveQuoteError,
  selectActiveSwapperName,
  selectBuyAmountBeforeFeesCryptoPrecision,
  selectBuyAmountBeforeFeesUserCurrency,
  selectFirstHop,
  selectNetReceiveAmountCryptoPrecision,
  selectReceiveBuyAmountUserCurrency,
  selectSellAmountUserCurrency,
  selectSwapperSupportsCrossAccountTrade,
  selectTotalNetworkFeeUserCurrencyPrecision,
  selectTotalProtocolFeeByAsset,
  selectTradeSlippagePercentageDecimal,
} from 'state/slices/tradeQuoteSlice/selectors'
import { tradeQuoteSlice } from 'state/slices/tradeQuoteSlice/tradeQuoteSlice'
import { useAppDispatch, useAppSelector } from 'state/store'
import { breakpoints } from 'theme/theme'

import { useAccountIds } from '../../hooks/useAccountIds'
import { useSupportedAssets } from '../../hooks/useSupportedAssets'
import { PriceImpact } from '../PriceImpact'
import { SellAssetInput } from './components/SellAssetInput'
import { TradeQuotes } from './components/TradeQuotes/TradeQuotes'

const flexDir: ResponsiveValue<Property.FlexDirection> = { base: 'column', md: 'row' }
const marginHorizontal = { base: 0, md: -3 }
const marginVertical = { base: -3, md: 0 }
const percentOptions = [1]

export const TradeInput = memo(() => {
  useGetTradeQuotes()
  const {
    state: { wallet },
  } = useWallet()
  const { handleSubmit } = useFormContext()
  const dispatch = useAppDispatch()
  const mixpanel = getMixPanel()
  const history = useHistory()
  const { showErrorToast } = useErrorHandler()
  const borderColor = useColorModeValue('gray.100', 'gray.750')
  const [isConfirmationLoading, setIsConfirmationLoading] = useState(false)
  const [showTradeQuotes, toggleShowTradeQuotes] = useToggle(false)
  const isKeplr = useMemo(() => wallet instanceof KeplrHDWallet, [wallet])
  const [isLargerThanMd] = useMediaQuery(`(min-width: ${breakpoints['md']})`, { ssr: false })
  const buyAssetSearch = useModal('buyAssetSearch')
  const sellAssetSearch = useModal('sellAssetSearch')
  const buyAsset = useAppSelector(selectBuyAsset)
  const sellAsset = useAppSelector(selectSellAsset)
  const tradeQuoteStep = useAppSelector(selectFirstHop)
  const swapperSupportsCrossAccountTrade = useAppSelector(selectSwapperSupportsCrossAccountTrade)
  const totalProtocolFees = useAppSelector(selectTotalProtocolFeeByAsset)
  const buyAmountAfterFeesCryptoPrecision = useAppSelector(selectNetReceiveAmountCryptoPrecision)
  const buyAmountBeforeFeesUserCurrency = useAppSelector(selectBuyAmountBeforeFeesUserCurrency)
  const buyAmountAfterFeesUserCurrency = useAppSelector(selectReceiveBuyAmountUserCurrency)
  const totalNetworkFeeFiatPrecision = useAppSelector(selectTotalNetworkFeeUserCurrencyPrecision)
  const manualReceiveAddressIsValidating = useAppSelector(selectManualReceiveAddressIsValidating)
  const sellAmountCryptoPrecision = useAppSelector(selectSellAmountCryptoPrecision)
  const sellAmountBeforeFeesUserCurrency = useAppSelector(selectSellAmountUserCurrency)
  const slippageDecimal = useAppSelector(selectTradeSlippagePercentageDecimal)

  const priceImpactPercentage = useMemo(() => {
    if (!sellAmountBeforeFeesUserCurrency || !buyAmountBeforeFeesUserCurrency) return bn('0')

    const tradeDifference = bn(sellAmountBeforeFeesUserCurrency)
      .minus(buyAmountBeforeFeesUserCurrency)
      .abs()

    return tradeDifference.div(sellAmountBeforeFeesUserCurrency).times(100)
  }, [sellAmountBeforeFeesUserCurrency, buyAmountBeforeFeesUserCurrency])

  const isModeratePriceImpact = useMemo(() => {
    if (!priceImpactPercentage) return false

    return bn(priceImpactPercentage).gt(5)
  }, [priceImpactPercentage])

  const hasUserEnteredAmount = useMemo(
    () => bnOrZero(sellAmountCryptoPrecision).gt(0),
    [sellAmountCryptoPrecision],
  )
  const activeQuoteStatus = useActiveQuoteStatus()
  const setBuyAsset = useCallback(
    (asset: Asset) => dispatch(swappers.actions.setBuyAsset(asset)),
    [dispatch],
  )
  const setSellAsset = useCallback(
    (asset: Asset) => dispatch(swappers.actions.setSellAsset(asset)),
    [dispatch],
  )
  const handleSwitchAssets = useCallback(
    () => dispatch(swappers.actions.switchAssets()),
    [dispatch],
  )

  useEffect(() => {
    // WARNING: do not remove.
    // clear the confirmed quote on mount to prevent stale data affecting the selectors
    dispatch(tradeQuoteSlice.actions.resetConfirmedQuote())
  }, [dispatch])

  const { supportedSellAssets, supportedBuyAssets } = useSupportedAssets()
  const activeQuote = useAppSelector(selectActiveQuote)
  const activeQuoteError = useAppSelector(selectActiveQuoteError)
  const activeSwapperName = useAppSelector(selectActiveSwapperName)
  const activeSwapperSupportsSlippage = getSwapperSupportsSlippage(activeSwapperName)
  const sortedQuotes = useAppSelector(selectSwappersApiTradeQuotes)
  const rate = activeQuote?.steps[0].rate

  const isQuoteLoading = useAppSelector(selectSwappersApiTradeQuotePending)
  const isLoading = useMemo(
    () => isQuoteLoading || isConfirmationLoading,
    [isConfirmationLoading, isQuoteLoading],
  )

  const { sellAssetAccountId, buyAssetAccountId, setSellAssetAccountId, setBuyAssetAccountId } =
    useAccountIds()
  const translate = useTranslate()
  const overlayTitle = useMemo(
    () => translate('trade.swappingComingSoonForWallet', { walletName: 'Keplr' }),
    [translate],
  )

  const handleSellAssetClick = useCallback(() => {
    sellAssetSearch.open({
      onClick: setSellAsset,
      title: 'trade.tradeFrom',
      assets: supportedSellAssets,
    })
  }, [sellAssetSearch, setSellAsset, supportedSellAssets])

  const handleBuyAssetClick = useCallback(() => {
    buyAssetSearch.open({
      onClick: setBuyAsset,
      title: 'trade.tradeTo',
      assets: supportedBuyAssets,
    })
  }, [buyAssetSearch, setBuyAsset, supportedBuyAssets])

  const buyAmountBeforeFeesCryptoPrecision = useAppSelector(
    selectBuyAmountBeforeFeesCryptoPrecision,
  )

  const quoteHasError = useMemo(() => {
    return activeQuoteStatus.quoteErrors.length > 0
  }, [activeQuoteStatus.quoteErrors])

  const onSubmit = useCallback(async () => {
    setIsConfirmationLoading(true)
    try {
      const eventData = getMixpanelEventData()
      if (mixpanel && eventData) {
        mixpanel.track(MixPanelEvents.TradePreview, eventData)
      }

      if (!wallet) throw Error('missing wallet')
      if (!tradeQuoteStep) throw Error('missing tradeQuoteStep')
      if (!activeQuote) throw Error('missing activeQuote')

      dispatch(tradeQuoteSlice.actions.setConfirmedQuote(activeQuote))

      const isApprovalNeeded = await checkApprovalNeeded(tradeQuoteStep, wallet)

      if (isApprovalNeeded) {
        history.push({ pathname: TradeRoutePaths.Approval })
        return
      }

      history.push({ pathname: TradeRoutePaths.Confirm })
    } catch (e) {
      showErrorToast(e)
    }

    setIsConfirmationLoading(false)
  }, [activeQuote, dispatch, history, mixpanel, showErrorToast, tradeQuoteStep, wallet])

  const isSellAmountEntered = bnOrZero(sellAmountCryptoPrecision).gt(0)

  const shouldDisablePreviewButton = useMemo(() => {
    return (
      quoteHasError ||
      manualReceiveAddressIsValidating ||
      isLoading ||
      !isSellAmountEntered ||
      !activeQuote
    )
  }, [activeQuote, isLoading, isSellAmountEntered, manualReceiveAddressIsValidating, quoteHasError])

  const rightRegion = useMemo(
    () =>
      activeQuote && hasUserEnteredAmount ? (
        <IconButton
          size='sm'
          icon={showTradeQuotes ? <ArrowUpIcon /> : <ArrowDownIcon />}
          aria-label='Expand Quotes'
          onClick={toggleShowTradeQuotes}
        />
      ) : (
        <></>
      ),
    [activeQuote, hasUserEnteredAmount, showTradeQuotes, toggleShowTradeQuotes],
  )

  const tradeQuotes = useMemo(
    () =>
      hasUserEnteredAmount ? (
        <TradeQuotes isOpen={showTradeQuotes} sortedQuotes={sortedQuotes} />
      ) : null,
    [hasUserEnteredAmount, showTradeQuotes, sortedQuotes],
  )

  return (
    <MessageOverlay show={isKeplr} title={overlayTitle}>
      <SlideTransition>
        <Stack spacing={6} as='form' onSubmit={handleSubmit(onSubmit)}>
          <Flex alignItems='center' justifyContent='space-between'>
            <Heading as='h5' fontSize='md'>
              {translate('navBar.trade')}
            </Heading>
            {activeSwapperSupportsSlippage && <SlippagePopover />}
          </Flex>
          <Stack spacing={2}>
            <Flex alignItems='center' flexDir={flexDir} width='full'>
              <TradeAssetSelect
                accountId={sellAssetAccountId}
                onAccountIdChange={setSellAssetAccountId}
                assetId={sellAsset.assetId}
                onAssetClick={handleSellAssetClick}
                label={translate('trade.from')}
              />
              <IconButton
                onClick={handleSwitchAssets}
                isRound
                mx={marginHorizontal}
                my={marginVertical}
                size='sm'
                position='relative'
                borderColor={useColorModeValue('gray.100', 'gray.750')}
                borderWidth={1}
                boxShadow={`0 0 0 3px var(${useColorModeValue(
                  '--chakra-colors-white',
                  '--chakra-colors-gray-785',
                )})`}
                bg={useColorModeValue('white', 'gray.850')}
                zIndex={1}
                aria-label='Switch Assets'
                icon={isLargerThanMd ? <ArrowForwardIcon /> : <ArrowDownIcon />}
              />
              <TradeAssetSelect
                accountId={buyAssetAccountId}
                assetId={buyAsset.assetId}
                onAssetClick={handleBuyAssetClick}
                onAccountIdChange={setBuyAssetAccountId}
                accountSelectionDisabled={!swapperSupportsCrossAccountTrade}
                label={translate('trade.to')}
              />
            </Flex>
            <SellAssetInput
              accountId={sellAssetAccountId}
              asset={sellAsset}
              label={translate('trade.youPay')}
            />
            <TradeAssetInput
              isReadOnly={true}
              accountId={buyAssetAccountId}
              assetId={buyAsset.assetId}
              assetSymbol={buyAsset.symbol}
              assetIcon={buyAsset.icon}
              cryptoAmount={
                isSellAmountEntered
                  ? positiveOrZero(buyAmountAfterFeesCryptoPrecision).toFixed()
                  : '0'
              }
              fiatAmount={
                isSellAmountEntered ? positiveOrZero(buyAmountAfterFeesUserCurrency).toFixed() : '0'
              }
              percentOptions={percentOptions}
              showInputSkeleton={isLoading}
              showFiatSkeleton={isLoading}
              label={translate('trade.youGet')}
              rightRegion={rightRegion}
            >
              {tradeQuotes}
            </TradeAssetInput>
          </Stack>
          {hasUserEnteredAmount && (
            <Stack boxShadow='sm' p={4} borderColor={borderColor} borderRadius='xl' borderWidth={1}>
              <RateGasRow
                sellSymbol={sellAsset.symbol}
                buySymbol={buyAsset.symbol}
                gasFee={totalNetworkFeeFiatPrecision ?? 'unknown'}
                rate={rate}
                isLoading={isLoading}
                isError={activeQuoteError !== undefined}
              />

              {activeQuote ? (
                <ReceiveSummary
                  isLoading={isLoading}
                  symbol={buyAsset.symbol}
                  amountCryptoPrecision={buyAmountAfterFeesCryptoPrecision ?? '0'}
                  amountBeforeFeesCryptoPrecision={buyAmountBeforeFeesCryptoPrecision}
                  protocolFees={totalProtocolFees}
                  shapeShiftFee='0'
                  slippage={slippageDecimal}
                  swapperName={activeSwapperName ?? ''}
                />
              ) : null}
              {isModeratePriceImpact && (
                <PriceImpact impactPercentage={priceImpactPercentage.toFixed(2)} />
              )}
            </Stack>
          )}
          {hasUserEnteredAmount && <DonationCheckbox isLoading={isLoading} />}
          <ManualAddressEntry />
          <Tooltip label={activeQuoteStatus.error?.message ?? activeQuoteStatus.quoteErrors[0]}>
            <Button
              type='submit'
              colorScheme={quoteHasError ? 'red' : 'blue'}
              size='lg-multiline'
              data-test='trade-form-preview-button'
              isDisabled={shouldDisablePreviewButton}
              isLoading={isLoading}
            >
              <Text translation={activeQuoteStatus.quoteStatusTranslation} />
            </Button>
          </Tooltip>
        </Stack>
      </SlideTransition>
    </MessageOverlay>
  )
})
