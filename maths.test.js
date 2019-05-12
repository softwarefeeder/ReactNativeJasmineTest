import {add ,divide} from "./maths"


import renderer from 'react-test-renderer';

it('testing add (1.2)', function() {
   const result = add(1,2)
   expect(3).toEqual(result);
});

it('testing dividing(4,2)',function() {
  const result = divide(4,2)
  expect(2).toEqual(result);
});


