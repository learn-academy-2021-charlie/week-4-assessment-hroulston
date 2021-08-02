# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: An instance variable is a variable that belongs to the instance of a class and begins with an @ sign. It cannot be called outside of the class, only within the class.

  Researched answer: It is a variable that starts with an @ symbol and stores data within a class. In order to access the instance variable from outside of the class it must be stored in a method or called when using attr_accessor. One difference I found interesting between an instance variable and class variable is that instance variables can only belong to one class while class variables can be shared between a class and all of it's subclasses. As well unlike other variables, instance variables do not need to be declared. Each instance variable is actually a "dynamic append" to an object.



2. What is a block in Ruby?

  Your answer: A block is anonymous function that begins with a do and ends with an end. If they are written on one line they can be done using {}.

  Researched answer: They are anonymous functions that can be passed into methods. They have do end statements or curly braces that encapsulates their logic. They also have the ability to take arguments that are passed between two pipe symbols. Blocks can be invoked by using a yield statement in a method which typically shares the block's name. If a block takes in an argument, that argument can be passed through when the yield statement is called.



3. Ruby has an implicit return. What does that mean?

  Your answer: This means that the last line in Ruby is returned with out having a return statement.

  Researched answer: Ruby will return the value of the last line in a block of code automatically. It  does not need a return statement.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object oriented programming means the code base is broken down into small sections or parts so it can be worked on without messing up other work that has been done. I am not entirely sure what the difference is between object and functional programming.

  Researched answer: Object oriented programming relies on classes and objects to structure the code so it is reusable because of the class "blueprints". Object oriented programming is also easier to debug because classes typically contain all of the applicable information. As well, because of encapsulation, the code is much more secure and limits interaction.

  Functional programming attempts to avoid changing mutable data. In a functional program the output should always be the same if given the same inputs. This helps to eliminate side effects in the code. This type of programming works best when state is not a factor and there is little to involvement with mutable data.



5. What is the difference between a class and an object?

  Your answer: A class holds that data and behavior that is given to an object. It is the blueprint for an object.  

  Researched answer: A class in an abstract blueprint that is used to create more specific objects. Classes often contain broad categories while objects contain these broad pre-definitions they also allow for a more detailed or defined version of the class.



6. STRETCH: What is `attr_accessor`?

  Your answer: The attr_accessor creates the set and get methods for a variable instead of having to set the variable and the get the variable through a method that is being called within the class.

  Researched answer: attr_accessor allows programers to get and set the instance variables; it creates public methods. 



## Looking Ahead: Terms for Next Week

1. PostgreSQL: A relational database similar to SQlite that allows you to store objects or data in a table. You can access the database with raw SQL or use a ORM like Rails uses active record.

2. Ruby on Rails: A framework built on top of Ruby that allows fast iteration of websites and startups. It uses convention over configuration to increase developer happiness. It has a large community that has developed gems (third party packages) that are plug and play so you can bring in the functionality you are looking for instead of building it yourself; although if you can build it yourself you should.

3. CRUD: Create Read Update Delete. This is a concept that most websites only need these four things. CRUD allows you to create a record, update a record, read from that record and delete that record.

4. ORM: Object Relational Mapping. It is a set of functions or methods that allow you to store objects in a database and establish relationships between those objects.

5. Active Record: Active Record is an ORM that used in Ruby on Rails and it can work with a lot of different data bases out of the box. But what it doesn't work with is NO DB style databases
