import React from 'react';
import './App.css';
import { Title, Subtitle, Item } from './Styles/styles'
import Skill from './Skill'

function App() {
    const [value, setValue] = React.useState(2);
    return (
        <div>
            <Title>Antonio Carlos de Moura
                <span>Desenvolvedor</span>
            </Title>
            <Subtitle>Habilidades</Subtitle>
            <Skill name="Delphi" value={5} />
            <Skill name="SQL" value={5} />
            <Skill name="JavaScript" value={4} />
            <Skill name="TypeScript" value={4} />
            <Skill name="Node.js" value={4} />           
            <hr/>
            <Subtitle>Formação</Subtitle>
            <Item>Ciência da Computação</Item>            
            <Item>Desenvolvimento de Sistemas</Item>            
        </div>
    );
}

export default App;
