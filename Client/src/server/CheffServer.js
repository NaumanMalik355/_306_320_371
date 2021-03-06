import { cheff_Actions } from '../constants/Cheff'
import store from '../store/index'
import { ROOT_URL } from '../constants/config';

export const studentServer = {
  //addStudent: addStudent,
  //showFindOneTodo: showFindOneTodo,
  fetchStudents: fetchStudents
}

export function fetchStudents()
{
  fetch('http://localhost:3000/api/Accounts/list' , {
        method: 'GET',
        headers: {'Content-Type':'application/json;charset=UTF-8'},
         mode: 'cors',
   }).then(response=>{
      console.log("response", response);

  //   // console.log('********'+response.status); //200
  //   // console.log("Response from server",response)  //undefined
  //   //json mein convert krnay k liye .json() ka function he use hotahay na? G han
  //  //Is mein error hay. Let me see if that's the correct function. 
  //   JSON.parse(response).then(data=>{
  //     console.log("data:......" + data)
    
  //     if(data.dataStatus ==='failure'){
  //       store.dispatch({type:cheff_Actions.cheff_Create.FAILURE,payload:data});
  //       return ;
  //     }
  //   else{
  //         alert("list length is "+ data.todos.length)
  //       store.dispatch({type:cheff_Actions.cheff_Create.ADDCHEFF,payload:data});
  //       return ;
  //   }
   
  
}).then(data=>{
  console.log("Data",data);
}).catch(err=> {
  console.log("Error in converting to json",err)
 });
return store.dispatch({type:cheff_Actions.cheff_Create.SHOWCHEFF,payload:"none"});

};


//add student
// export function addStudent(coursecose,email,fullname,regno,section)
// {
//   var user ={'studentcoursecode':coursecose,'email':email,'fullname':fullname,'regNo':regno,'section':section}

//   const postRequest =  fetch(ROOT_URL+'/api/Accounts/enterStudent', {
//         method: 'POST',
//         headers: {'Content-Type':'application/json;charset=UTF-8'},
//         mode: 'cors',
//         body: JSON.stringify(user)
//    }).then((response)=>{
//     console.log('********'+response.status);

//     response.json().then(data=>{
//       console.log("data:......" + data.dataStatus)
//      // "not_found" is from backend
//       if(data.dataStatus =='not_found'){
//       store.dispatch({type:student_Actions.student_Create.FAILURE,payload:data});
//       return ;
//       }
//       // "found" is from student controller in backend
//     else{ 
//         //alert("Dataaaa"+data.todos.length)
//       store.dispatch({type:student_Actions.student_Create.SHOWSTUDENT,payload:data});
//       return ;
//     }
//      });
// })
//yahan wh defaul state set krni hai jis par click krny sy yeh page show ho rha hai from showfindonetodo
// return {type:student_Actions.student_Create.ADDSTUDENT,payload:'none'};

// };

// show data  findcoursecode/:scoursecode
export function showFindOneTodo() {
  // alert(scoursecode+"in server");
  const getRequest = fetch(ROOT_URL + '/api/students/list/'  , {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    mode: 'cors',
  }).then((response) => {
    console.log('********' + response.status);

    response.json().then(data => {
      console.log("data:......" + data.recordsets)
       alert(data.recordsets.length);
      store.dispatch({ type: cheff_Actions.cheff_Create.ADDCHEFF, 
        payload: data.recordsets });
      return;
      // "not_found" is from backend
      //   if(data.dataStatus =='not_found'){
      //   store.dispatch({type:student_Actions.student_Create.FAILURE,payload:data});
      //   return ;
      //   }
      //   // "found" is from student controller in backend
      // else{ 
      //   //  alert("Dataaaa"+data.todos.length)
      //   store.dispatch({type:student_Actions.student_Create.SHOWSTUDENT,payload:data});
      //   return ;
      // }
    });
  })
  return store.dispatch({ type: cheff_Actions.cheff_Create.SHOWCHEFF, payload: "none" });
};