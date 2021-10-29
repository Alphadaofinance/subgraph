// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DailyBond extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DailyBond entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DailyBond entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DailyBond", id.toString(), this);
  }

  static load(id: string): DailyBond | null {
    return store.get("DailyBond", id) as DailyBond | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }
}

export class Ohmie extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Ohmie entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Ohmie entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Ohmie", id.toString(), this);
  }

  static load(id: string): Ohmie | null {
    return store.get("Ohmie", id) as Ohmie | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bondDeposits(): Array<string> {
    let value = this.get("bondDeposits");
    return value.toStringArray();
  }

  set bondDeposits(value: Array<string>) {
    this.set("bondDeposits", Value.fromStringArray(value));
  }

  get bondRedemptions(): Array<string> {
    let value = this.get("bondRedemptions");
    return value.toStringArray();
  }

  set bondRedemptions(value: Array<string>) {
    this.set("bondRedemptions", Value.fromStringArray(value));
  }

  get stakeTransactions(): Array<string> {
    let value = this.get("stakeTransactions");
    return value.toStringArray();
  }

  set stakeTransactions(value: Array<string>) {
    this.set("stakeTransactions", Value.fromStringArray(value));
  }

  get unstakeTransactions(): Array<string> {
    let value = this.get("unstakeTransactions");
    return value.toStringArray();
  }

  set unstakeTransactions(value: Array<string>) {
    this.set("unstakeTransactions", Value.fromStringArray(value));
  }

  get historicBalance(): Array<string> {
    let value = this.get("historicBalance");
    return value.toStringArray();
  }

  set historicBalance(value: Array<string>) {
    this.set("historicBalance", Value.fromStringArray(value));
  }

  get lastBalance(): string | null {
    let value = this.get("lastBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set lastBalance(value: string | null) {
    if (value === null) {
      this.unset("lastBalance");
    } else {
      this.set("lastBalance", Value.fromString(value as string));
    }
  }

  get active(): boolean {
    let value = this.get("active");
    return value.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }
}

export class OhmieBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OhmieBalance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OhmieBalance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OhmieBalance", id.toString(), this);
  }

  static load(id: string): OhmieBalance | null {
    return store.get("OhmieBalance", id) as OhmieBalance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ohmie(): string {
    let value = this.get("ohmie");
    return value.toString();
  }

  set ohmie(value: string) {
    this.set("ohmie", Value.fromString(value));
  }

  get sohmBalance(): BigDecimal {
    let value = this.get("sohmBalance");
    return value.toBigDecimal();
  }

  set sohmBalance(value: BigDecimal) {
    this.set("sohmBalance", Value.fromBigDecimal(value));
  }

  get ohmBalance(): BigDecimal {
    let value = this.get("ohmBalance");
    return value.toBigDecimal();
  }

  set ohmBalance(value: BigDecimal) {
    this.set("ohmBalance", Value.fromBigDecimal(value));
  }

  get bondBalance(): BigDecimal {
    let value = this.get("bondBalance");
    return value.toBigDecimal();
  }

  set bondBalance(value: BigDecimal) {
    this.set("bondBalance", Value.fromBigDecimal(value));
  }

  get dollarBalance(): BigDecimal {
    let value = this.get("dollarBalance");
    return value.toBigDecimal();
  }

  set dollarBalance(value: BigDecimal) {
    this.set("dollarBalance", Value.fromBigDecimal(value));
  }

  get stakes(): Array<string> | null {
    let value = this.get("stakes");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set stakes(value: Array<string> | null) {
    if (value === null) {
      this.unset("stakes");
    } else {
      this.set("stakes", Value.fromStringArray(value as Array<string>));
    }
  }

  get bonds(): Array<string> | null {
    let value = this.get("bonds");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set bonds(value: Array<string> | null) {
    if (value === null) {
      this.unset("bonds");
    } else {
      this.set("bonds", Value.fromStringArray(value as Array<string>));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deposit", id.toString(), this);
  }

  static load(id: string): Deposit | null {
    return store.get("Deposit", id) as Deposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get ohmie(): string {
    let value = this.get("ohmie");
    return value.toString();
  }

  set ohmie(value: string) {
    this.set("ohmie", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get maxPremium(): BigDecimal {
    let value = this.get("maxPremium");
    return value.toBigDecimal();
  }

  set maxPremium(value: BigDecimal) {
    this.set("maxPremium", Value.fromBigDecimal(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Redemption extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Redemption entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Redemption entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Redemption", id.toString(), this);
  }

  static load(id: string): Redemption | null {
    return store.get("Redemption", id) as Redemption | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }

  get ohmie(): string | null {
    let value = this.get("ohmie");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ohmie(value: string | null) {
    if (value === null) {
      this.unset("ohmie");
    } else {
      this.set("ohmie", Value.fromString(value as string));
    }
  }

  get token(): string | null {
    let value = this.get("token");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token(value: string | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromString(value as string));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Stake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Stake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Stake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Stake", id.toString(), this);
  }

  static load(id: string): Stake | null {
    return store.get("Stake", id) as Stake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get ohmie(): string {
    let value = this.get("ohmie");
    return value.toString();
  }

  set ohmie(value: string) {
    this.set("ohmie", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Unstake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Unstake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Unstake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Unstake", id.toString(), this);
  }

  static load(id: string): Unstake | null {
    return store.get("Unstake", id) as Unstake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get ohmie(): string {
    let value = this.get("ohmie");
    return value.toString();
  }

  set ohmie(value: string) {
    this.set("ohmie", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Rebase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Rebase entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Rebase entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Rebase", id.toString(), this);
  }

  static load(id: string): Rebase | null {
    return store.get("Rebase", id) as Rebase | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get stakedOhms(): BigDecimal {
    let value = this.get("stakedOhms");
    return value.toBigDecimal();
  }

  set stakedOhms(value: BigDecimal) {
    this.set("stakedOhms", Value.fromBigDecimal(value));
  }

  get percentage(): BigDecimal {
    let value = this.get("percentage");
    return value.toBigDecimal();
  }

  set percentage(value: BigDecimal) {
    this.set("percentage", Value.fromBigDecimal(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }
}

export class DailyStakingReward extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DailyStakingReward entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DailyStakingReward entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DailyStakingReward", id.toString(), this);
  }

  static load(id: string): DailyStakingReward | null {
    return store.get("DailyStakingReward", id) as DailyStakingReward | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (value === null) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(value as Bytes));
    }
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class ProtocolMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ProtocolMetric entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ProtocolMetric entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ProtocolMetric", id.toString(), this);
  }

  static load(id: string): ProtocolMetric | null {
    return store.get("ProtocolMetric", id) as ProtocolMetric | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get ohmCirculatingSupply(): BigDecimal {
    let value = this.get("ohmCirculatingSupply");
    return value.toBigDecimal();
  }

  set ohmCirculatingSupply(value: BigDecimal) {
    this.set("ohmCirculatingSupply", Value.fromBigDecimal(value));
  }

  get sOhmCirculatingSupply(): BigDecimal {
    let value = this.get("sOhmCirculatingSupply");
    return value.toBigDecimal();
  }

  set sOhmCirculatingSupply(value: BigDecimal) {
    this.set("sOhmCirculatingSupply", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get ohmPrice(): BigDecimal {
    let value = this.get("ohmPrice");
    return value.toBigDecimal();
  }

  set ohmPrice(value: BigDecimal) {
    this.set("ohmPrice", Value.fromBigDecimal(value));
  }

  get marketCap(): BigDecimal {
    let value = this.get("marketCap");
    return value.toBigDecimal();
  }

  set marketCap(value: BigDecimal) {
    this.set("marketCap", Value.fromBigDecimal(value));
  }

  get totalValueLocked(): BigDecimal {
    let value = this.get("totalValueLocked");
    return value.toBigDecimal();
  }

  set totalValueLocked(value: BigDecimal) {
    this.set("totalValueLocked", Value.fromBigDecimal(value));
  }

  get treasuryRiskFreeValue(): BigDecimal {
    let value = this.get("treasuryRiskFreeValue");
    return value.toBigDecimal();
  }

  set treasuryRiskFreeValue(value: BigDecimal) {
    this.set("treasuryRiskFreeValue", Value.fromBigDecimal(value));
  }

  get treasuryMarketValue(): BigDecimal {
    let value = this.get("treasuryMarketValue");
    return value.toBigDecimal();
  }

  set treasuryMarketValue(value: BigDecimal) {
    this.set("treasuryMarketValue", Value.fromBigDecimal(value));
  }

  get nextEpochRebase(): BigDecimal {
    let value = this.get("nextEpochRebase");
    return value.toBigDecimal();
  }

  set nextEpochRebase(value: BigDecimal) {
    this.set("nextEpochRebase", Value.fromBigDecimal(value));
  }

  get nextDistributedOhm(): BigDecimal {
    let value = this.get("nextDistributedOhm");
    return value.toBigDecimal();
  }

  set nextDistributedOhm(value: BigDecimal) {
    this.set("nextDistributedOhm", Value.fromBigDecimal(value));
  }

  get treasuryDaiRiskFreeValue(): BigDecimal {
    let value = this.get("treasuryDaiRiskFreeValue");
    return value.toBigDecimal();
  }

  set treasuryDaiRiskFreeValue(value: BigDecimal) {
    this.set("treasuryDaiRiskFreeValue", Value.fromBigDecimal(value));
  }

  get treasuryFraxRiskFreeValue(): BigDecimal {
    let value = this.get("treasuryFraxRiskFreeValue");
    return value.toBigDecimal();
  }

  set treasuryFraxRiskFreeValue(value: BigDecimal) {
    this.set("treasuryFraxRiskFreeValue", Value.fromBigDecimal(value));
  }

  get treasuryLusdRiskFreeValue(): BigDecimal {
    let value = this.get("treasuryLusdRiskFreeValue");
    return value.toBigDecimal();
  }

  set treasuryLusdRiskFreeValue(value: BigDecimal) {
    this.set("treasuryLusdRiskFreeValue", Value.fromBigDecimal(value));
  }

  get treasuryDaiMarketValue(): BigDecimal {
    let value = this.get("treasuryDaiMarketValue");
    return value.toBigDecimal();
  }

  set treasuryDaiMarketValue(value: BigDecimal) {
    this.set("treasuryDaiMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryFraxMarketValue(): BigDecimal {
    let value = this.get("treasuryFraxMarketValue");
    return value.toBigDecimal();
  }

  set treasuryFraxMarketValue(value: BigDecimal) {
    this.set("treasuryFraxMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryLusdMarketValue(): BigDecimal {
    let value = this.get("treasuryLusdMarketValue");
    return value.toBigDecimal();
  }

  set treasuryLusdMarketValue(value: BigDecimal) {
    this.set("treasuryLusdMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryXsushiMarketValue(): BigDecimal {
    let value = this.get("treasuryXsushiMarketValue");
    return value.toBigDecimal();
  }

  set treasuryXsushiMarketValue(value: BigDecimal) {
    this.set("treasuryXsushiMarketValue", Value.fromBigDecimal(value));
  }

  get treasuryWETHMarketValue(): BigDecimal {
    let value = this.get("treasuryWETHMarketValue");
    return value.toBigDecimal();
  }

  set treasuryWETHMarketValue(value: BigDecimal) {
    this.set("treasuryWETHMarketValue", Value.fromBigDecimal(value));
  }

  get currentAPY(): BigDecimal {
    let value = this.get("currentAPY");
    return value.toBigDecimal();
  }

  set currentAPY(value: BigDecimal) {
    this.set("currentAPY", Value.fromBigDecimal(value));
  }

  get runway2dot5k(): BigDecimal | null {
    let value = this.get("runway2dot5k");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway2dot5k(value: BigDecimal | null) {
    if (value === null) {
      this.unset("runway2dot5k");
    } else {
      this.set("runway2dot5k", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get runway5k(): BigDecimal | null {
    let value = this.get("runway5k");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway5k(value: BigDecimal | null) {
    if (value === null) {
      this.unset("runway5k");
    } else {
      this.set("runway5k", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get runway7dot5k(): BigDecimal | null {
    let value = this.get("runway7dot5k");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway7dot5k(value: BigDecimal | null) {
    if (value === null) {
      this.unset("runway7dot5k");
    } else {
      this.set("runway7dot5k", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get runway10k(): BigDecimal | null {
    let value = this.get("runway10k");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway10k(value: BigDecimal | null) {
    if (value === null) {
      this.unset("runway10k");
    } else {
      this.set("runway10k", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get runway20k(): BigDecimal | null {
    let value = this.get("runway20k");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway20k(value: BigDecimal | null) {
    if (value === null) {
      this.unset("runway20k");
    } else {
      this.set("runway20k", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get runway50k(): BigDecimal | null {
    let value = this.get("runway50k");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway50k(value: BigDecimal | null) {
    if (value === null) {
      this.unset("runway50k");
    } else {
      this.set("runway50k", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get runway70k(): BigDecimal | null {
    let value = this.get("runway70k");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway70k(value: BigDecimal | null) {
    if (value === null) {
      this.unset("runway70k");
    } else {
      this.set("runway70k", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get runway100k(): BigDecimal | null {
    let value = this.get("runway100k");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runway100k(value: BigDecimal | null) {
    if (value === null) {
      this.unset("runway100k");
    } else {
      this.set("runway100k", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get runwayCurrent(): BigDecimal | null {
    let value = this.get("runwayCurrent");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set runwayCurrent(value: BigDecimal | null) {
    if (value === null) {
      this.unset("runwayCurrent");
    } else {
      this.set("runwayCurrent", Value.fromBigDecimal(value as BigDecimal));
    }
  }

  get treasuryOhmDaiPOL(): BigDecimal {
    let value = this.get("treasuryOhmDaiPOL");
    return value.toBigDecimal();
  }

  set treasuryOhmDaiPOL(value: BigDecimal) {
    this.set("treasuryOhmDaiPOL", Value.fromBigDecimal(value));
  }

  get treasuryOhmFraxPOL(): BigDecimal {
    let value = this.get("treasuryOhmFraxPOL");
    return value.toBigDecimal();
  }

  set treasuryOhmFraxPOL(value: BigDecimal) {
    this.set("treasuryOhmFraxPOL", Value.fromBigDecimal(value));
  }

  get treasuryOhmLusdPOL(): BigDecimal {
    let value = this.get("treasuryOhmLusdPOL");
    return value.toBigDecimal();
  }

  set treasuryOhmLusdPOL(value: BigDecimal) {
    this.set("treasuryOhmLusdPOL", Value.fromBigDecimal(value));
  }

  get holders(): BigInt {
    let value = this.get("holders");
    return value.toBigInt();
  }

  set holders(value: BigInt) {
    this.set("holders", Value.fromBigInt(value));
  }
}

export class ContractInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ContractInfo entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ContractInfo entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ContractInfo", id.toString(), this);
  }

  static load(id: string): ContractInfo | null {
    return store.get("ContractInfo", id) as ContractInfo | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get contract(): string | null {
    let value = this.get("contract");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contract(value: string | null) {
    if (value === null) {
      this.unset("contract");
    } else {
      this.set("contract", Value.fromString(value as string));
    }
  }

  get amount(): BigDecimal | null {
    let value = this.get("amount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set amount(value: BigDecimal | null) {
    if (value === null) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}

export class Aux extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Aux entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Aux entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Aux", id.toString(), this);
  }

  static load(id: string): Aux | null {
    return store.get("Aux", id) as Aux | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class BondDiscount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BondDiscount entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BondDiscount entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BondDiscount", id.toString(), this);
  }

  static load(id: string): BondDiscount | null {
    return store.get("BondDiscount", id) as BondDiscount | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get dai_discount(): BigDecimal {
    let value = this.get("dai_discount");
    return value.toBigDecimal();
  }

  set dai_discount(value: BigDecimal) {
    this.set("dai_discount", Value.fromBigDecimal(value));
  }

  get ohmdai_discount(): BigDecimal {
    let value = this.get("ohmdai_discount");
    return value.toBigDecimal();
  }

  set ohmdai_discount(value: BigDecimal) {
    this.set("ohmdai_discount", Value.fromBigDecimal(value));
  }

  get frax_discount(): BigDecimal {
    let value = this.get("frax_discount");
    return value.toBigDecimal();
  }

  set frax_discount(value: BigDecimal) {
    this.set("frax_discount", Value.fromBigDecimal(value));
  }

  get ohmfrax_discount(): BigDecimal {
    let value = this.get("ohmfrax_discount");
    return value.toBigDecimal();
  }

  set ohmfrax_discount(value: BigDecimal) {
    this.set("ohmfrax_discount", Value.fromBigDecimal(value));
  }

  get eth_discount(): BigDecimal {
    let value = this.get("eth_discount");
    return value.toBigDecimal();
  }

  set eth_discount(value: BigDecimal) {
    this.set("eth_discount", Value.fromBigDecimal(value));
  }

  get lusd_discount(): BigDecimal {
    let value = this.get("lusd_discount");
    return value.toBigDecimal();
  }

  set lusd_discount(value: BigDecimal) {
    this.set("lusd_discount", Value.fromBigDecimal(value));
  }

  get ohmlusd_discount(): BigDecimal {
    let value = this.get("ohmlusd_discount");
    return value.toBigDecimal();
  }

  set ohmlusd_discount(value: BigDecimal) {
    this.set("ohmlusd_discount", Value.fromBigDecimal(value));
  }
}
