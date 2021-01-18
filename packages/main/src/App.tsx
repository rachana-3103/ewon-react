import React from "react";
import { Button } from "@doar/components/src";
import styled from "@doar/shared/src/theme/utils";

const Header = styled.header`
    background: red;
`;

const App: React.FC = () => {
    return (
        <div className="App">
            <Header>
                <Button color="primary" size="lg" isFullWidth>
                    Button
                </Button>
            </Header>
        </div>
    );
};

export default App;
