export default function Avatar({size}){
  let imgSizeW = 'w-12';
  let imgSizeH = 'h-12';
  if (size === 'lg') {
    imgSizeW = 'w-36';
    imgSizeH = 'h-36';
  }
    return(
        <div className={` ${imgSizeW} rounded-full overflow-hidden`}>
        <img
          alt="avatar"
          className={` ${imgSizeH} object-cover`}
          src="https://images.unsplash.com/photo-1659757828854-0a0ebcf42ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
        />
      </div>
    )
}