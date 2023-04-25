import '@elastic/eui/dist/eui_theme_light.css';
import {
  EuiProvider,
  EuiPage,
  EuiPageHeader,
  EuiPageBody,
  EuiPageSection
} from '@elastic/eui';
import './App.css'

function App() {
  return (
    <EuiProvider colorMode="light">
      <EuiPageHeader
      paddingSize='m'
      pageTitle="Demo Page"
      iconType="logoKibana"
      description="This a demo github pages app using EUI."
      />
      <EuiPage paddingSize='m'>
      <EuiPageBody paddingSize="none" panelled={true}>
        <EuiPageSection>Content goes here</EuiPageSection>
      </EuiPageBody>
      </EuiPage>
    </EuiProvider>
  );
}

export default App;
