import MembershipCard from './MembershipCard'
import MembershipFlex from "../../mocks/MembershipFlex"
import MembershipStarter from "../../mocks/MembershipStarter"
import MembershipPro from "../../mocks/MembershipPro"
import MembershipBusiness from "../../mocks/MembershipBusiness"


export default function Memberships({refComponent = null}) {
  const memberships = [MembershipFlex, MembershipStarter, MembershipPro, MembershipBusiness]
  return (
    <div id="membership" ref={refComponent} className='w-full flex flex-col justify-center items-center mt-14 gap-10 px-4'>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        {memberships.map((membership, index) => (
          <MembershipCard key={index} category={membership.category} features={membership.features} price={membership.price} recommended={membership.recommended} />
        ))}

      </div>
      <div className='flex flex-col justify-center items-start px-4'>
        <p>* Todos los profesionales de Reku se listan en una cartilla online para que el paciente pueda ver su perfil y agendar un turno.</p>
        <p>** Reku podrá realizar acuerdos con entidades, clubes y empresas para brindar servicios de telerehabilitación virtual. </p>
        <p>*** Los abonos incluyen videollamadas, en caso de contratar un abono que no las incluya se podrán adquirir a precio de lista.</p>

      </div>
    </div>
  )
}
