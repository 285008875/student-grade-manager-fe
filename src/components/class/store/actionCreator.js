import { GETCLASS, UPDATECLASS, DELETECLASS, ADDCLASS } from './constants';
import  axios from '../../../axios.config';
import { message } from 'antd';
export  function setClass(){
    return (dispatch)=>{
        try {
            axios.get('./classmanage').then((res)=>{

                // console.log(res)
                const { result, code, succeed } = res.data
                if (code === 200 && succeed === 1) {
                    dispatch(getClass(result))
                }
            })

        } catch (err) {
            console.log(err)
        }
    }
    
}
export function modifyClass(clazz) {
    // console.log(clazz)
    return (dispatch) => {
        try {
            axios.post('./classmanage', clazz).then((res) => {

                const { result, code, succeed } = res.data

                if (code === 200 && succeed === 1) {
                    dispatch(updateClass(result))
                    message.success('信息修改成功');

                }else{
                    message.error('信息修改失败');
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

}
export function delClass(clazz) {
    return (dispatch) => {
        try {
            axios.post('./delclassmanage', clazz).then((res) => {
                const { result, code, succeed } = res.data
                if (code === 200 && succeed === 1) {
                    dispatch(deleteClass(result))
                    message.success('信息修改成功');
                }else{
                    message.error('信息修改失败');
                }
            })
        } catch (err) {
            message.error('信息修改失败');
        }
    }

}
export function addClass(clazz) {
    // console.log(clazz)
    return (dispatch) => {
        try {
            axios.put('./classmanage', clazz).then((res) => {

                const { result, code, succeed } = res.data

                if (code === 200 && succeed === 1) {
 
                    dispatch(insertClass(result))
                    message.success('添加成功');
                } else {
                    message.error('添加失败');
                }
            })
        } catch (err) {
            console.log(err)
            message.error('请求失败失败');
        }
    }
}
const getClass = (payload) => ({
    type: GETCLASS,
    payload
})
const updateClass = (payload) => ({
    type: UPDATECLASS,
    payload
})
const deleteClass = (payload) => ({
    type: DELETECLASS,
    payload
})
const insertClass = (payload) => ({
    type: ADDCLASS,
    payload
})
