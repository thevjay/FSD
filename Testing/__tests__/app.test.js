
const sortingByAge = require('../app')

test("testing if the first user is Elon after sorting",()=>{
    const sortedData  = sortingByAge();
    
    expect(sortedData[0].name).toBe("Elon")
})

test("testing if the sorted data has length of 4",()=>{
    const sortedData  = sortingByAge();
    
    // expect(sortedData[sortedData.length-1].name).toBe("Sachin")
    // expect(sortedData).not.toBe(undefined)
    // expect(sortedData).not.toBeUndefined()
      
    expect(sortedData).toHaveLength(4);
})
