import React, {FC, PropsWithChildren} from 'react';
import cl from "./Panel.module.css";

const Panel: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={cl.panel}>
            {children}
        </div>
    );
};

export default Panel;