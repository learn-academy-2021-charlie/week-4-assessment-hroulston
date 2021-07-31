# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Create a method called incl_letter
# Takes a parameter of an array
# I will probably need to iterate over the array using a block
# I will check each value of the array and see if it includes the letter given.
# If it does it will be pushed to an empty array

def incl_letter(array, letter)
  fin_array = []
  array.each do |value|
    if value.include? (letter)
      fin_array.push(value)
    end
  end
  p fin_array
end

incl_letter(beverages_array, letter_t)



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Create a method called vowel_removed
# Takes a parameter of a String
# Iterate over the string using a block
# Check each value against a list of values and if it is a value then it will be deleted
# Return string with out vowels

def vowel_removed string
  string.delete! "aeiouAEIOU"
  p string
end

vowel_removed album3

# I have realized javascript makes you overthink and get into every single tiny detail. It's a little refreshing and a little scary that you can take all of that logic/thought process and condense it down to just a simple "delete this value". I initially forgot that I needed to put the ! at the end to make it mutate the string. ALSO forgot to account for uppercase letters. Glad I ran through all three strings.

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# I need to create a class called Bike
# I need to initialize it with mode, wheels and current speed
# I need to set the wheels to 2 and the speed to 0
# I need to create a method called get_info and have it output a string that consists of string interpolation to grab the model, wheels and current speed from the initializer.
# Assign a new instance of the class to object trek_bike
# call trek_bike and get_info to print out string.

class Bike
  def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def get_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
end

trek_bike = Bike.new "Trek"
p trek_bike.get_info
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
