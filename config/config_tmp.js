export class Config {
  static TXAMOUNTMIN = 0.1; //TX AMOUNT MIN
  static TXAMOUNTMAX = 0.5; //TX AMOUNT MAX
  static SWAPCOUNT = 10; //SWAP COUNT
  static STAKENODEOPERATOR =
    "0xcf4b9402e7f156bc75082bc07581b0829f081ccfc8c444c71df4536ea33d094a"; //Operator: Mysten Labs 0
  static DISPLAY = "BLESS"; // TWIST OR BLESS
  static DELAYINHOURS = 24;

  //NETWORK
  static RPC = {
    NETWORK: "testnet",
    EXPLORER: "https://testnet.suivision.xyz/",
  };
}
