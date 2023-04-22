/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace NftMarketplace {
  export type ListingStruct = {
    price: PromiseOrValue<BigNumberish>;
    seller: PromiseOrValue<string>;
  };

  export type ListingStructOutput = [BigNumber, string] & {
    price: BigNumber;
    seller: string;
  };
}

export interface NftMarketplaceInterface extends utils.Interface {
  functions: {
    "acceptOffer(bytes,address,uint256,address,uint16,address)": FunctionFragment;
    "buyItem(bytes,address,uint16,address,uint256)": FunctionFragment;
    "cancelListing(address,uint256)": FunctionFragment;
    "cancelOffer(address,uint256)": FunctionFragment;
    "getListing(address,uint256)": FunctionFragment;
    "getMarketplaceFee()": FunctionFragment;
    "getOffer(address,uint256,address)": FunctionFragment;
    "listItem(address,uint256,uint256)": FunctionFragment;
    "offer(address,uint256,uint256)": FunctionFragment;
    "offers(address,uint256,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setMarketplaceFee(uint16)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateListing(address,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOffer"
      | "buyItem"
      | "cancelListing"
      | "cancelOffer"
      | "getListing"
      | "getMarketplaceFee"
      | "getOffer"
      | "listItem"
      | "offer"
      | "offers"
      | "owner"
      | "renounceOwnership"
      | "setMarketplaceFee"
      | "transferOwnership"
      | "updateListing"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOffer",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buyItem",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelListing",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOffer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getListing",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketplaceFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOffer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "listItem",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "offer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "offers",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketplaceFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateListing",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getListing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMarketplaceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOffer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "offer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "offers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketplaceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateListing",
    data: BytesLike
  ): Result;

  events: {
    "ItemBought(address,address,address,uint256,uint256)": EventFragment;
    "ItemCanceled(address,address,uint256)": EventFragment;
    "ItemListed(address,address,uint256,uint256)": EventFragment;
    "ItemOfferAccepted(address,address,address,uint256,uint256)": EventFragment;
    "ItemOfferCanceled(address,address,uint256)": EventFragment;
    "ItemOffered(address,address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProceedsTransferred(address,uint256,uint16,uint16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ItemBought"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemListed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemOfferAccepted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemOfferCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemOffered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProceedsTransferred"): EventFragment;
}

export interface ItemBoughtEventObject {
  buyer: string;
  seller: string;
  nftAddress: string;
  tokenId: BigNumber;
  price: BigNumber;
}
export type ItemBoughtEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  ItemBoughtEventObject
>;

export type ItemBoughtEventFilter = TypedEventFilter<ItemBoughtEvent>;

export interface ItemCanceledEventObject {
  seller: string;
  nftAddress: string;
  tokenId: BigNumber;
}
export type ItemCanceledEvent = TypedEvent<
  [string, string, BigNumber],
  ItemCanceledEventObject
>;

export type ItemCanceledEventFilter = TypedEventFilter<ItemCanceledEvent>;

export interface ItemListedEventObject {
  seller: string;
  nftAddress: string;
  tokenId: BigNumber;
  price: BigNumber;
}
export type ItemListedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  ItemListedEventObject
>;

export type ItemListedEventFilter = TypedEventFilter<ItemListedEvent>;

export interface ItemOfferAcceptedEventObject {
  buyer: string;
  seller: string;
  nftAddress: string;
  tokenId: BigNumber;
  price: BigNumber;
}
export type ItemOfferAcceptedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  ItemOfferAcceptedEventObject
>;

export type ItemOfferAcceptedEventFilter =
  TypedEventFilter<ItemOfferAcceptedEvent>;

export interface ItemOfferCanceledEventObject {
  offerAddress: string;
  nftAddress: string;
  tokenId: BigNumber;
}
export type ItemOfferCanceledEvent = TypedEvent<
  [string, string, BigNumber],
  ItemOfferCanceledEventObject
>;

export type ItemOfferCanceledEventFilter =
  TypedEventFilter<ItemOfferCanceledEvent>;

export interface ItemOfferedEventObject {
  offerAddress: string;
  nftAddress: string;
  tokenId: BigNumber;
  price: BigNumber;
}
export type ItemOfferedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  ItemOfferedEventObject
>;

export type ItemOfferedEventFilter = TypedEventFilter<ItemOfferedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ProceedsTransferredEventObject {
  seller: string;
  totalAmount: BigNumber;
  marketplaceFee: number;
  collectionFee: number;
}
export type ProceedsTransferredEvent = TypedEvent<
  [string, BigNumber, number, number],
  ProceedsTransferredEventObject
>;

export type ProceedsTransferredEventFilter =
  TypedEventFilter<ProceedsTransferredEvent>;

export interface NftMarketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NftMarketplaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOffer(
      signature: PromiseOrValue<BytesLike>,
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      collectionOwner: PromiseOrValue<string>,
      collectionFee: PromiseOrValue<BigNumberish>,
      offerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    buyItem(
      signature: PromiseOrValue<BytesLike>,
      collectionOwner: PromiseOrValue<string>,
      collectionFee: PromiseOrValue<BigNumberish>,
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelOffer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[NftMarketplace.ListingStructOutput]>;

    getMarketplaceFee(overrides?: CallOverrides): Promise<[number]>;

    getOffer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      offerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    listItem(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    offer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      offerPrice: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    offers(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMarketplaceFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOffer(
    signature: PromiseOrValue<BytesLike>,
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    collectionOwner: PromiseOrValue<string>,
    collectionFee: PromiseOrValue<BigNumberish>,
    offerAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  buyItem(
    signature: PromiseOrValue<BytesLike>,
    collectionOwner: PromiseOrValue<string>,
    collectionFee: PromiseOrValue<BigNumberish>,
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelListing(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelOffer(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getListing(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<NftMarketplace.ListingStructOutput>;

  getMarketplaceFee(overrides?: CallOverrides): Promise<number>;

  getOffer(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    offerAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  listItem(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  offer(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    offerPrice: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  offers(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMarketplaceFee(
    newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateListing(
    nftAddress: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    newPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOffer(
      signature: PromiseOrValue<BytesLike>,
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      collectionOwner: PromiseOrValue<string>,
      collectionFee: PromiseOrValue<BigNumberish>,
      offerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    buyItem(
      signature: PromiseOrValue<BytesLike>,
      collectionOwner: PromiseOrValue<string>,
      collectionFee: PromiseOrValue<BigNumberish>,
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOffer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<NftMarketplace.ListingStructOutput>;

    getMarketplaceFee(overrides?: CallOverrides): Promise<number>;

    getOffer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      offerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listItem(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    offer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      offerPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    offers(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setMarketplaceFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ItemBought(address,address,address,uint256,uint256)"(
      buyer?: PromiseOrValue<string> | null,
      seller?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: null,
      price?: null
    ): ItemBoughtEventFilter;
    ItemBought(
      buyer?: PromiseOrValue<string> | null,
      seller?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: null,
      price?: null
    ): ItemBoughtEventFilter;

    "ItemCanceled(address,address,uint256)"(
      seller?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ItemCanceledEventFilter;
    ItemCanceled(
      seller?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ItemCanceledEventFilter;

    "ItemListed(address,address,uint256,uint256)"(
      seller?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): ItemListedEventFilter;
    ItemListed(
      seller?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): ItemListedEventFilter;

    "ItemOfferAccepted(address,address,address,uint256,uint256)"(
      buyer?: PromiseOrValue<string> | null,
      seller?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: null,
      price?: null
    ): ItemOfferAcceptedEventFilter;
    ItemOfferAccepted(
      buyer?: PromiseOrValue<string> | null,
      seller?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: null,
      price?: null
    ): ItemOfferAcceptedEventFilter;

    "ItemOfferCanceled(address,address,uint256)"(
      offerAddress?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ItemOfferCanceledEventFilter;
    ItemOfferCanceled(
      offerAddress?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ItemOfferCanceledEventFilter;

    "ItemOffered(address,address,uint256,uint256)"(
      offerAddress?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): ItemOfferedEventFilter;
    ItemOffered(
      offerAddress?: PromiseOrValue<string> | null,
      nftAddress?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      price?: null
    ): ItemOfferedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "ProceedsTransferred(address,uint256,uint16,uint16)"(
      seller?: PromiseOrValue<string> | null,
      totalAmount?: null,
      marketplaceFee?: null,
      collectionFee?: null
    ): ProceedsTransferredEventFilter;
    ProceedsTransferred(
      seller?: PromiseOrValue<string> | null,
      totalAmount?: null,
      marketplaceFee?: null,
      collectionFee?: null
    ): ProceedsTransferredEventFilter;
  };

  estimateGas: {
    acceptOffer(
      signature: PromiseOrValue<BytesLike>,
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      collectionOwner: PromiseOrValue<string>,
      collectionFee: PromiseOrValue<BigNumberish>,
      offerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    buyItem(
      signature: PromiseOrValue<BytesLike>,
      collectionOwner: PromiseOrValue<string>,
      collectionFee: PromiseOrValue<BigNumberish>,
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelOffer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarketplaceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getOffer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      offerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listItem(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    offer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      offerPrice: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    offers(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMarketplaceFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOffer(
      signature: PromiseOrValue<BytesLike>,
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      collectionOwner: PromiseOrValue<string>,
      collectionFee: PromiseOrValue<BigNumberish>,
      offerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    buyItem(
      signature: PromiseOrValue<BytesLike>,
      collectionOwner: PromiseOrValue<string>,
      collectionFee: PromiseOrValue<BigNumberish>,
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelOffer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarketplaceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOffer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      offerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listItem(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    offer(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      offerPrice: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    offers(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMarketplaceFee(
      newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateListing(
      nftAddress: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      newPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
