
function RefactorComponent({children}) {
  return (
    <div className={{padding: '20px', maxWidth: '800px', margin: '0 auto' , border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'}}>
        
        {children}
    </div>
  )
}

export default RefactorComponent