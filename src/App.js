import logo from './logo.svg';
import './App.css';
import demo from './component/demo';
import Time from './component/Time';
import TimeFun from './component/TimeFun';

{<Time/>}
{<TimeFun/>}


// function App() {

//   let mdata = [
//     {
//       id: 101,
//       name: 'Abacavir',
//       quantity: 25,
//       price: 150,
//       expiry: 2022,
//       status: true
//     },
//     {
//       id: 102,
//       name: 'Eltrombopag',
//       quantity: 90,
//       price: 550,
//       expiry: 2021,
//       status: true
//     },
//     {
//       id: 103,
//       name: 'Meloxicam',
//       quantity: 85,
//       price: 450,
//       expiry: 2025,
//       status: false
//     },
//     {
//       id: 104,
//       name: 'Allopurinol',
//       quantity: 50,
//       price: 600,
//       expiry: 2023,
//       status: true
//     },
//     {
//       id: 105,
//       name: 'Phenytoin',
//       quantity: 63,
//       price: 250,
//       expiry: 2021,
//       status: false
//     }
//   ];

//   let Employeedata = [
//     {
//       name: "amit",
//       age: 35,
//       salary: 40000,
//       bonus: 1000,
//       status: true
//     },
//     {
//       name: "ajay",
//       age: 25,
//       salary: 38000,
//       bonus: 2000,
//       status: false
//     },
//     {
//       name: "mayur",
//       age: 23,
//       salary: 50000,
//       bonus: 500,
//       status: true
//     },
//     {
//       name: "jay",
//       age: 29,
//       salary: 35000,
//       bonus: 600,
//       status: true
//     },
//     {
//       name: "raj",
//       age: 33,
//       salary: 22000,
//       bonus: 2000,
//       status: true
//     },
//   ]
//   let empoyfdilter = Employeedata.filter((ed, inx) => ed.status === true);
//   let totalexpens =  empoyfdilter.filter((es,ids)=> es.status === true);

//   let total = mdata.reduce((acc, data1, index1) =>  acc + data1.price,0);
//   let totalex = empoyfdilter.reduce((acc1, dataex, index1ex) =>  acc1 + dataex.salary + dataex.bonus,0);

//   return (
//     <div>
//       <h2 align="center">Medicine Data:</h2>
//       <table border="2px" width="750px" align="center">
//         <tr>
//           <th>id</th>
//           <th>name</th>
//           <th>quantity</th>
//           <th>expiry</th>
//           <th>status</th>
//           <th>price</th>
//           <th>Total price</th>
//         </tr>
//         {
//           mdata.map((data, i) => {
//             let {id, name, quantity, expiry, status, price} = data;
//             return (
//               <tr key={i}>
//                 <td align="center">{id}</td>
//                 <td align="center">{name}</td>
//                 <td align="center">{quantity}</td>
//                 <td align="center">{expiry}</td>
//                 <td align="center">{status.toString()}</td>
//                 <td align="center">{price}</td>
//                 {i === 0 ? <td align="center" rowSpan="6">{total}</td> : null}
//               </tr>
//             )
//           })
//         }
//       </table>



//       <>
//         <br></br>
//       </>
//       <h2 align="center">Employee Data:</h2>
//       <table border="2px" align="center" >
//         <tr>
//           <th>name</th>
//           <th>age</th>
//           <th>salary</th>
//           <th>bonus</th>
//           <th>status</th>
//           <th>total salary</th>
//           <th>total expense</th>
//         </tr>
//         {
//           totalexpens.map((data2, i2) => {
//             let {name, age, salary, bonus, status} = data2;
//             return (
//               <tr key={i2}>
//                 <td align="center" width="80px">{name}</td>
//                 <td align="center"  width="50px">{age}</td>
//                 <td align="center"  width="80px">{salary}</td>
//                 <td align="center"  width="80px">{bonus}</td>
//                 <td align="center"  width="80px">{status.toString()}</td>
//                 <td align="center"  width="80px">{salary + bonus}</td>
//                 {i2 === 0 ? <td align="center" rowSpan="7">{totalex}</td> : null}
//               </tr>
//             )
//           })
//         }
//       </table>
//     </div>
//   );
// }

export default App;
