import '@testing-library/jest-dom'
import {render} from '@testing-library/react'

describe("Header logo", () => {
    test("it should return an boolean", () => {
  
      const component = render(<Header size="50"></Header>);
      //console.log(component.container.querySelector('img'))
      
  
      expect(component.getByAltText('img'))
    });

});