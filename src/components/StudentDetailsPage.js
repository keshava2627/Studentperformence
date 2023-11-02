import React from 'react';
import  { useState } from 'react';
import  { useNavigate } from 'react-router-dom';

const mockStudentData = [
    {
      id: 1,
      name: 'John Doe',
      class: 'Class 1A',
      marks: {
        Math: 95,
        English: 88,
        Science: 92,
      },
    },
    {
      id: 2,
      name: 'Alice Smith',
      class: 'Class 1A',
      marks: {
        Math: 87,
        English: 91,
        Science: 84,
      },
    },
    {
        id: 3,
        name: 'Sindhuja',
        class: 'Class 2A',
        marks: {
          Math: 87,
          English: 91,
          Science: 84,
        },
      },
      {
        id: 4,
        name: 'Supriya',
        class: 'Class 2A',
        marks: {
          Math: 87,
          English: 91,
          Science: 84,
        },
      },
      {
        id: 5,
        name: 'keshava',
        class: 'Class 5',
        marks: {
          Math: 87,
          English: 91,
          Science: 84,
        },
      },
      {
        id: 6,
        name: 'Mohali',
        class: 'Class 6',
        marks: {
          Math: 87,
          English: 91,
          Science: 84,
        },
      },
      {
        id: 7,
        name: 'Ramu',
        class: 'Class 7',
        marks: {
          Math: 87,
          English: 91,
          Science: 84,
        },
      },
      {
        id: 8,
        name: 'gopal',
        class: 'Class 8',
        marks: {
          Math: 87,
          English: 91,
          Science: 84,
        },
      },
      {
        id: 9,
        name: 'madhu',
        class: 'Class 9',
        marks: {
          Math: 87,
          English: 91,
          Science: 84,
        },
      },
      {
        id: 10,
        name: 'mahesh',
        class: 'Class 10',
        marks: {
          Math: 87,
          English: 91,
          Science: 84,
        },
      },
    // Add more student data here...
  ];
  

  




  const StudentDetailsPage = () => {
    const [students, setStudents] = useState(mockStudentData);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedClass, setSelectedClass] = useState(null);
   
    const navigate=new useNavigate();
  
    const distinctClasses = [...new Set(students.map((student) => student.class))];
    const tenDistinctClasses = distinctClasses.slice(0, 10);
  
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
      setSelectedClass(null); // Clear selected class when searching
    };
  
    const handleClassButtonClick = (className) => {
      setSelectedClass(className);
    };
  
    const filteredStudents = students.filter((student) => {
      return (
        (selectedClass === null || student.class === selectedClass) &&
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    const handleLogout = () => {
        // Perform logout logic (e.g., clear session or token)
        // For demonstration purposes, we'll use localStorage to clear user information
        localStorage.removeItem('userToken'); // Clear the user token (adjust this to your actual implementation)
    
        // Redirect to the home page (login page)
        navigate('/login'); // Use the navigate function to redirect
      };
  
    return (
      <div>
        <h2>Student Details</h2>
        <button onClick={handleLogout}>Logout</button>
        <div>
          <input
            type="text"
            placeholder="Search for a student"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div>
          <h3>Filter by Class:</h3>
          {distinctClasses.map((className) => (
            <button
              key={className}
              onClick={() => handleClassButtonClick(className)}
              className={selectedClass === className ? 'active' : ''}
            >
              {className}
            </button>
          ))}
        </div>
        <div className="student-cards">
          {filteredStudents.map((student) => (
            <div key={student.id} className="student-card">
              <h3>{student.name}</h3>
              <p>Class: {student.class}</p>
              <p>Marks:</p>
              <ul>
                {Object.entries(student.marks).map(([subject, marks]) => (
                  <li key={subject}>
                    {subject}: {marks}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default StudentDetailsPage;
  
  
  
