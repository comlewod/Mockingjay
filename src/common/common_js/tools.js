let jsType = {}
let typeArr = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error']
typeArr.forEach(e => {
	jsType['[object ' + e + ']'] = e.toLowerCase()
})

window.M_TOOLS = {
	//判断js数据类型
	judgeType(obj){
		if( obj == null ) return String(obj)
		let type = typeof obj === 'object' || typeof obj === 'function' ? 
					jsType[Object.prototype.toString.call(obj)] || 'object' : 
					typeof obj
		return type
	},
}

export default {}
