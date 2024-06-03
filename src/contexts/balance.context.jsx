import { createContext, useState } from "react";
import userServices from "../services/user.services";

const BalanceContext = createContext();

function BalanceProviderWrapper(props) {
    const [balance, setBalance] = useState(0);

    const addFunds = amount => {
        userServices
            .addBalance({ amount })
            .then(({ data }) => setBalance(data.balance))
            .catch(err => console.log(err));
    };

    const spendFunds = amount => {
        userServices
            .spendBalance({ amount })
            .then(({ data }) => setBalance(data.balance))
            .catch(err => console.log(err));
    };

    return (
        <BalanceContext.Provider value={{ balance, addFunds, spendFunds }}>
            {props.children}
        </BalanceContext.Provider>
    );
}

export { BalanceContext, BalanceProviderWrapper };