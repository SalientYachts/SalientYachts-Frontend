import Transfer from "./components/Transfer";
import NativeBalance from "../NativeBalance";
import Address from "../Address/Address";
import Blockie from "../Blockie";
import { Card } from "antd";
import ERC20Balance from '../ERC20Balance';

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "5px solid black",
    borderRadius: "2rem",
    width: "450px",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "20px",
    background: "#93a6c3",
    marginLeft: "auto",
    marginRight: "auto"
  },
};

function Wallet() {
  return (
    <div >
    <Card
      style={styles.card}
      title={
        <div style={styles.header}>
          <Blockie scale={5} avatar currentWallet />
          <Address size="6" copyable />
          <NativeBalance />
        </div>
      }
    >
      <Transfer />
    </Card>

    <ERC20Balance />
    </div>
  );
}

export default Wallet;
