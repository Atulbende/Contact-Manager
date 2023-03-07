import $ from "jquery";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
export const Screen={  
                        LoaderON:function(){$('.Savtech_overlay').addClass('d-flex').removeClass('d-none');},
                        LoaderOff: function (){$('.Savtech_overlay').addClass('d-none').removeClass('d-flex'); },
                        Notification:{ 
                                Msg:{
                                        Def1:'Login Successfully',
                                        Def2:'Incorrect User Name/Password',
                                        Def3:'Save Successfully',
                                        Def4:'Update Successfully',
                                        Def5:'Delete Successfully',
                                        Def6:'Nothing has been changed',
                                        Def7:'Record Already Exist',
                                },
                                        Info:function (Msg,Time){
                                                toast.info(Msg, {position: "top-right", autoClose: Time,hideProgressBar: false,
                                                        closeOnClick: true,
                                                        pauseOnHover: true,
                                                        draggable: true,
                                                        progress: undefined,
                                                        theme: "light",
                                                        });
                                                },
                                        Error:function(Msg,Time){
                                                toast.error(Msg, { position: "top-right",autoClose: Time, hideProgressBar: false,
                                                        closeOnClick: true,
                                                        pauseOnHover: true,
                                                        draggable: true,
                                                        progress: undefined,
                                                        theme: "light",
                                                        });
                                        },
                                        Warm:function(Msg,Time){
                                                toast.warn(Msg, {position: "top-right", autoClose: Time,
                                                        hideProgressBar: false,
                                                        closeOnClick: true, 
                                                        pauseOnHover: true,
                                                        draggable: true,
                                                        progress: undefined,
                                                        theme: "light",
                                                        });

                                        },
                                        Success:function(Msg,Time){
                                                toast.success(Msg, {position: "top-right", autoClose: Time,
                                                        hideProgressBar: false,
                                                        closeOnClick: true,
                                                        pauseOnHover: true,
                                                        draggable: true,
                                                        progress: undefined,
                                                        theme: "light",
                                                        });
                                                
                                                
                                        }
                        }
                }  
export const Validation={
        IsValid:function(_v,obj){
                if(JSON.stringify(obj)===JSON.stringify(JSON.parse(localStorage.getItem('Obj')))){
                        Screen.Notification.Warm(Screen.Notification.Msg.Def6,5000);
                        return false;        
                }else{        
                        const _f=[];
                        for(let [key,val] of Object.entries(obj)){
                        $('#'+key).removeClass('border border-danger');
                        if(_v.includes(key)){
                                if(val=='' || val==undefined)_f.push(key);
                        }
                }
                if(_f.length>0){
                        _f.map((_v)=>{
                        Screen.Notification.Error('Input Required: '+_v.match(/[A-Z][a-z]+|[0-9]+/g).join(" ").toString(),5000);
                        $('#'+_v).addClass('border border-danger');
                })
                        return false;
                }
                 return true;
                }

        }                
}
export const Form={
                Load: async function(cur,fn,set){
                        if(set!=-1) {
                                await fn({...cur,...set});
                                localStorage.setItem('Obj',JSON.stringify(set));
                        }else{
                                localStorage.setItem('Obj',JSON.stringify(cur));
                        };
                } 
} 
export const Notify={
  NotifyMsg:function(_res){
        const _MSG=[{Res:-1,Msg:Screen.Notification.Msg.Def7,Type:Screen.Notification.Error},{Res:1,Msg:Screen.Notification.Msg.Def3,Type:Screen.Notification.Success},{Res:-2,Msg:Screen.Notification.Msg.Def7,Type:Screen.Notification.Error},{Res:2,Msg:Screen.Notification.Msg.Def3,Type:Screen.Notification.Success}];
        let a=  _MSG.filter((m)=>m.Res==_res);
        a[0].Type(a[0].Msg,1500);   
  }
}
//  export const fn={
//          Grid:function(_data,_Title,_return,_list){
//                 var table=  $('#sampleTable').DataTable({
//                         'data':_data,
//                         'columns' :_Title,
//                         destroy: true 
//                         ,fixedColumns:{leftColumns:1}
//                       });
//                 ($('#sampleTable.dataTable').find('tbody')).on('click','tr td',function(event){
//                         $(this).parent().toggleClass('selected');
//                         console.log($(this).parent());
//                        var cellDT=table.cell(this).index();
//                        var items = $.map(table.rows('.selected').data(), function (item) {
//                             return item.Id;
//                         });
//                         _return:{
//                                 cellDt:cellDT
                                
//                         }
//                         _list:{
//                                 item:items
//                         }
                        
//                       });

//         }
//  }