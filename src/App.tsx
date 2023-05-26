import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { breakify } from './helpers/breakify';
import BreakingLogo from './components/BreakingLogo';

//BREAKING

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [breakedFirstName, setBreakedFirstName] = useState(['', '', '']);
  const [breakedLastName, setBreakedLastName] = useState(['', '', '']);

  useEffect(() => {
    setBreakedFirstName(breakify(firstName));
  }, [firstName]);

  useEffect(() => {
    setBreakedLastName(breakify(lastName));
  }, [lastName]);

  return (
    <AppWrapper>
      <Content>
        <BreakingLogo result={breakedFirstName} />
        <BreakingLogo result={breakedLastName} />
        <ContentRow>
          <ContentCol>
            <Label>First Name</Label>
            <Input
              onChange={e => setFirstName(e.target.value)}
              value={firstName}
            />
          </ContentCol>
          <ContentCol>
            <Label>Last Name</Label>
            <Input
              onChange={e => setLastName(e.target.value)}
              value={lastName}
            />
          </ContentCol>
        </ContentRow>
        <Button>Breakify</Button>
      </Content>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.5rem;
`;

const Label = styled.label`
  color: #fff;

  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 0.5rem;
  color: #222;

  &:focus {
    //change focus line color
    outline: none;
  }
`;

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  background-color: #0f5135;
  display: block;
  width: 100%;
  color: #fff;

  &:hover {
    border-color: #646cff;
  }
`;

export default App;
