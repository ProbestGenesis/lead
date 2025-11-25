type Props = {}
function Following({}: Props) {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center py-8">
          <h3>Nous suivres sur les différentes platforme</h3>
          
          <ul className="flex flex-row space-x-2"> 
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
    </div>
  )
}
export default Following