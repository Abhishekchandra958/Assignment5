  function Person(FirstName,LastName,OfficeAddress)
  {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.OfficeAddress = OfficeAddress;
  }

  var person1 = new Person("Ashutosh","Pandey","Bhopal, Madhya Pradesh");
  var person2 = new Person("Rashmit","Deepak","Pune, Maharashtra");
  var person3 = new Person("Abhishek","Chandra","Muzaffarpur, Bihar");
  
  console.log("Name of First Person : "+person1.FirstName+" "+person1.LastName+"     First Person's Address : "+person1.OfficeAddress);
  console.log("Name of Second Person : "+person2.FirstName+" "+person2.LastName+"    Second Person's Address : "+person2.OfficeAddress);
  console.log("Name of Third Person : "+person3.FirstName+" "+person3.LastName+"     Third Person's Address : "+person3.OfficeAddress);