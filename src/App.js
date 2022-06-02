import logo from './logo.svg';
import './App.css';
import demo from './component/demo';

function App() { 
  
        const person = { 
          name: "Amit", 
          age: 25 
        } 
        for (let k in person) { 
          console.log(k + " : " + person[k]); 
        } 
     
        const person_1 = [ 
          { 
            name: "Amit", 
            age: 25, 
          }, 
          { 
            name: "Piyush", 
            age: 40, 
          }, 
     
     
        ]; 
     
        person_1.map((p, i) => { 
          for (let k1 in p) { 
            console.log(k1 + " : " + p[k1]); 
          } 
        }) 
     
        const person_2 = { 
          name: "Amit", 
          age: 25, 
          course: [ 
            "C", 
            "HTML" 
          ] 
        } 
     
        for (let k3 in person_2) { 
          if (k3 === "course") { 
            person_2.course.map((data, index) => { 
              console.log(data); 
            }) 
          } else { 
            console.log(k3 + " : " + person_2[k3]); 
          } 
        } 
     
        const person_3 = [ 
          { 
            name: "Amit", 
            age: 25, 
            course: [ 
              "C", 
              "HTML" 
            ] 
          }, 
          { 
            name: "Ajay", 
            age: 40, 
            course: [ 
              "Java", 
              "JavaScript" 
            ] 
          } 
        ] 
     
        person_3.map((p, i) => { 
         for(let k4 in p){ 
     
           if(k4==="course"){ 
            p.course.map((data1, i1) => { 
              console.log(data1); 
            }) 
           } else{ 
            console.log(k4 + " : " + p[k4]); 
           } 
         } 
        }) 
     
        const myObj = { 
          name: "John", 
          age: 30, 
          cars: { 
              car1: "Ford", 
              car2: "BMW", 
              car3: "Fiat" 
          } 
      } 
     
      for(let m in myObj){ 
        if(m ==="cars"){ 
          for(let j in myObj[m]){ 
            console.log(myObj[m][j]); 
          } 
        } else{ 
          console.log(m + " : " + myObj[m]); 
        } 
      } 
     
      let data = { 
        person_info: { 
          name :'Amit', 
          age : '25', 
          city : 'surat' 
        }, 
        course : ["C","Javascript","React"], 
        branches : { 
          rw1 : { 
           admission : 50, 
           vacant_seat : 10 
          }, 
          rw2 : { 
            admission : 30, 
            vacant_seat : 20 
           }, 
           rw3 : { 
            admission :25, 
            vacant_seat :25 
           }, 
           rw4 : { 
            admission : 40, 
            vacant_seat : 10 
           } 
        } 
      } 
     
      for(let d in data){ 
         if(d === "person_info"){ 
          for(let d1 in data[d]){ 
            console.log(d1 +" : "+data[d][d1]); 
          } 
         } else if(d === "course"){ 
          data.course.map((cd,index1)=>{ 
            console.log(cd); 
          }) 
         } else if(d === "branches"){ 
             for(let d4 in data[d]){ 
              for(let b1 in data[d][d4]){ 
                console.log(b1 + " : " + data[d][d4][b1]); 
              } 
             } 
         } 
      } 
     
      let m_data = [ 
        { 
          id: 101, 
          name: 'Abacavir', 
          quantity: 25, 
          price: 150, 
          expiry: 2022, 
          status: true 
        }, 
        { 
          id: 102, 
          name: 'Eltrombopag', 
          quantity: 90, 
          price: 550, 
          expiry: 2021, 
          status: true 
        }, 
        { 
          id: 103, 
          name: 'Meloxicam', 
          quantity: 85, 
          price: 450, 
          expiry: 2025, 
          status: false 
        }, 
        { 
          id: 104, 
          name: 'Allopurinol', 
          quantity: 50, 
          price: 600, 
          expiry: 2023, 
          status: true 
        }, 
        { 
          id: 105, 
          name: 'Phenytoin', 
          quantity: 63, 
          price: 250, 
          expiry: 2021, 
          status: false 
        } 
      ]; 
     
      let Employee_data = [ 
        { 
          name: "amit", 
          age: 35, 
          salary: 40000, 
          bonus: 1000, 
          status: true 
        }, 
        { 
          name: "ajay", 
          age: 25, 
          salary: 38000, 
          bonus: 2000, 
          status: false 
        }, 
        { 
          name: "mayur", 
          age: 23, 
          salary: 50000, 
          bonus: 500, 
          status: true 
        }, 
        { 
          name: "jay", 
          age: 29, 
          salary: 35000, 
          bonus: 600, 
          status: true 
        }, 
        { 
          name: "raj", 
          age: 33, 
          salary: 22000, 
          bonus: 2000, 
          status: true 
        }, 
      ] 
      let empoyfdilter = Employee_data.filter((ed, inx) => ed.status === true); 
     
      let total = m_data.reduce((acc, data1, index1) => acc + data1.price, 0); 
     
      return ( 
        <div> 
          <h1 align="center">Medicine Data:</h1> 
          <table border="1px" align="center"> 
            <tr> 
              <th>id</th> 
              <th>name</th> 
              <th>quantity</th> 
              <th>expiry</th> 
              <th>status</th> 
              <th>price</th> 
              <th>Total price</th> 
            </tr> 
            { 
              m_data.map((data, i) => { 
                let { id, name, quantity, expiry, status, price } = data; 
                return ( 
                  <tr key={i}> 
                    <td align="center" width="90">{id}</td> 
                    <td align="center" width="90px">{name}</td> 
                    <td align="center" width="90px">{quantity}</td> 
                    <td align="center" width="90px">{expiry}</td> 
                    <td align="center" width="90px">{status.toString()}</td> 
                    <td align="center" width="90px">{price}</td> 
                    {i === 0 ? <td align="center" rowSpan="5">{total}</td> : null} 
                  </tr> 
                ) 
              }) 
            } 
          </table> 
     
          <> 
            <br></br> 
          </> 
          <h1 align="center">Employee Data:</h1> 
          <table border="1px" align="center"> 
            <tr> 
              <th>name</th> 
              <th>age</th> 
              <th>salary</th> 
              <th>bonus</th> 
              <th>status</th> 
              <th>total salary</th> 
            </tr> 
            { 
              Employee_data.map((data2, i2) => { 
                let { name, age, salary, bonus, status } = data2; 
                return ( 
                  <tr key={i2}> 
                    <td align="center" width="100px">{name}</td> 
                    <td align="center" width="100px" >{age}</td> 
                    <td align="center" width="100px">{salary}</td> 
                    <td align="center" width="100px">{bonus}</td> 
                    <td align="center" width="100px">{status.toString()}</td> 
                    <td align="center" width="100px">{salary + bonus}</td> 
                  </tr> 
                ) 
              }) 
            } 
          </table> 
        </div> 
      ); 
    } 

export default App;
