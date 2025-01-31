export class Config {
  static TXAMOUNTMIN = 0.1; //TX AMOUNT MIN
  static TXAMOUNTMAX = 0.5; //TX AMOUNT MAX
  static SWAPCOUNT = 5; //SWAP COUNT
  static STAKENODEOPERATOR = [
    "0x001e1696af97d14ceefdf5771c0ca74f5375d9b0ae57ccdb2b9d8ce212762b6e", //Operator: BartestneT
    "0x015e3daef941d0d87de2c586bebacbde4c8a29c60f09d8e8eb854c5719c002d1", //Operator: Graphyte
    "0x01ef8dad1ea8afe318fe2003a5123b20c4fe6511659ecf46d968851c15b67134", //Operator: LakeStake
  ];

  static DISPLAY = "TWIST"; // TWIST OR BLESS
  static DELAYINHOURS = 6;

  //NETWORK
  static RPC = {
    NETWORK: "testnet",
    EXPLORER: "https://testnet.suivision.xyz/",
  };
}
