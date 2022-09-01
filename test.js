function Student (firstName, lastName , rollNum , sex , dob  ) {
    this.firstName = firstName ;
    this.lastName = lastName ;
    this.rollNum = rollNum ;
    this.sex = sex ;
    this.dob = new Date(dob) ;
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
        };
    
    }
     
    const s1 = new Student("rohan" , "chauhan" , 25 , "male" , "5-05-1998");
    console.log(s1.getFullName);
    
    
    