import {Heading, CustomButton} from './styledComponents'

import './App.css'

// const App = () => <h1 className="heading">Hello World</h1>
const App = () => (
  <>
    <Heading>Hello World</Heading>

    {/* <CustomButton type="button" color="#ffffff" bgColor="#0070c1"> */}
    {/* <CustomButton type="button" outline={false}> */}
    <CustomButton type="button">Click</CustomButton>
    <CustomButton type="button" outline>
      Click
    </CustomButton>
  </>
)
export default App
