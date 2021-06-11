export function debounce(fnc,delay){
	let mark=null;
	return ()=>{
		if(mark){ clearTimeout(mark) }
		mark=setTimeout(()=>{fnc()},delay)
	}
}