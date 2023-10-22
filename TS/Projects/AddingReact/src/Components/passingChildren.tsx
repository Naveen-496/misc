

const Button = (props: {children: React.ReactNode, className: string}) => {
   return (
     <>
     <button className={props.className}>{props.children}</button>
     </>
   )
}


const Parent = () => {

  return (
      <>
      <Button className="my-class" >this is children</Button>
      </>
  )

}