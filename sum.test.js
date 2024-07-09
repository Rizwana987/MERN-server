const sum = require('./test/sum')

//jest test cases
test('1+2=3',()=>{
  expect(sum(1,2)).toBe(3);
  //toBe()=>exactly equal to 
})
// run 'npm test' under server folder

test('Object in array',()=>{
  const data = {one:1}
  data['two']=2
  expect(data).toEqual({one:1,two:2});
})

//toBeNull ->if the received value is NULL
test('Value is NULL',()=>{
    const n=null;
    expect(n).toBeNull();
})

//toBeDefined -> if a value is defined or not
test('Value iss Defined',()=>{
    const a=1;
    expect(a).toBeDefined();//defined
    //expect(b).toBeDefined();//undefined
})

//toBeTruthy -> which make sures that the recived value should be truth
test('Value is Truth',()=>{
    const bool=true
    expect(bool).toBeTruthy();
})

//toBeFalsy -> which make sures that the recived value should be False
test('Value is False',()=>{
    const bool=false
    expect(bool).toBeFalsy();
})
