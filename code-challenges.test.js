// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

describe("shuffle", () => {
  test("the array returns an array missing the first index and the rest of the values shuffled", () => {

    var colors1 = ["purple", "blue", "green", "yellow", "pink"]

    // expect(shuffle(colors1)).not.toContain("purple")
    expect(shuffle(colors1)).toContain("blue", "green", "yellow", "pink")

    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

    // expect(shuffle(colors2)).not.toContain("chartreuse")
    expect(shuffle(colors2)).toContain("indigo", "periwinkle", "ochre", "aquamarine", "saffron")
  })
})

// So this test works, BUT it will work if I just pop the first one off. It still passed even though the values were in different places. But I don't think this test is 100%. I'm going to keep working and think on it.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



// b) Create the function that makes the test pass.

// Create a function called shuffle
// It takes a parameter of an array
// It is going to take the first item off of the array using shift and save the remaining array in a new_colors array
// Next I need to loop through the new array to access each index
// When I think of randomly shuffled numbers I think of math.random in addition to math.floor so it can produce whole integers and multiply it by the length of the new_colors - 1
// I am going to save my math.random to a variable
// Next we are taking current index of the array and reassign it to the ranodom number variable
// Return the array with the indexes changed

// const shuffle = (array) => {
//  array.shift()
//  new_colors = array
//  for (let i=0; i<new_colors.length; i++){
//    var a = Math.floor(Math.random()) * (new_colors.length - 1)
//    new_colors[i] = array[a]
//  }
//  return new_colors
// }
// console.log(shuffle(colors1))

// Ok so the code above gave me an array of all blue, and for obvious reasons failed the test. So, let's see I'm going to jump to my pen and paper and fill in variables with values
// So it is looking like I need to assign my current index to a variable so the current index can keep changing.

const shuffle = (array) => {
 array.shift()
 new_colors = array
 for (let i=0; i<new_colors.length; i++){
   var random_num = Math.floor(Math.random() * (new_colors.length - 1))
   var current_color = new_colors[i]
   new_colors[i] = new_colors[random_num]

   // Ok, I got stuck here and it looked like in my research I would change the random number to what the current index was before it was reassigned.

   new_colors[random_num] = current_color
 }
 return new_colors
}

// So this was returning the same array and then I realized I had the *(new_colors.length -1) outside of the Math.floor parenthesis. Once I fixed it it gave me a random output each run. Yes!


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("min_max", () => {
  test("returns an array of the minimun and maximum numbers in the appropriate order",() => {

    var nums1 = [3, 56, 90, -8, 0, 23, 6]

    expect(min_max(nums1)).toEqual([-8, 90])

    var nums2 = [109, 5, 9, 67, 8, 24]

    expect(min_max(nums2)).toEqual([5, 109])
  })
})

// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
// var nums2 = [109, 5, 9, 67 8, 24]
// Expected output: [5, 109]



// b) Create the function that makes the test pass.

// Create a function called min_max
// It will take a parameter of an array
// There will be an empty array called final_array
// I am going to sort the array given from least to greatest using sort((a,b)=>a-b) and save that to sorted_array
// Then I am going to take index [0] and push it to the final_array
// Next I will do array[arr.length-1] to grab the last index and push that to the final_array
// Return final_array

const min_max = (array) => {
  final_array = []
  sorted_array = array.sort((a,b)=>a-b)
  final_array.push(sorted_array[0], sorted_array[sorted_array.length-1])
  return final_array
}

// I did do push twice initially, but I refactored it to push two items at once.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("no_duplicates", () => {
  test("returns an array that does not contain any duplicate values", () => {

    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]

    expect(no_duplicates(testArray1, testArray2 )).toContain([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.

// Create a function called no_duplicates
// It will take a parameter of two arrays
// Both arrays will be pushed into a new array called all_nums
// Whoops, nope. I will be using concat not push. Push will push an array within my array. I don't want that.
// all_nums will get sorted from least to greatest using .sort((a,b)=>a-b)
// I will loop through the array and check if the current index equals the current index + 1. If it does then it will do splice(index+1, 1) so it just takes that value
// If it does not equal then it will just return the current index.
// the function will return all_nums

// const no_duplicates = (array1, array2) => {
//   no_dups = []
//   all_nums = array1.concat(array2)
//   all_nums = all_nums.sort((a,b)=>a-b)
//   for(let i=0; i<all_nums.length; i++){
//     if(all_nums[i]==all_nums[i+1]){
//       all_nums.splice(all_nums[i], 1)
//       console.log(all_nums)
//     }else{
//       return no_dups.push(all_nums[i])
//     }
//   }
// }
//
// console.log(no_duplicates(testArray1, testArray2))

// Well this isn't working but I did find a solution that was on my thought process but makes a little more sense so I am going to try it.

const no_duplicates = (array1, array2) => {
  no_dups = []
  all_nums = array1.concat(array2)
  all_nums = all_nums.sort((a,b)=>a-b)
  for(let i=0; i<all_nums.length; i++){
    if(no_dups.indexOf() === -1){
      no_dups.push()
  }
}

console.log(no_duplicates(testArray1, testArray2))
