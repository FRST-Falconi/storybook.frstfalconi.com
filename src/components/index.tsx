import UserCard from '@components/cards/user'

/**
 * @param {UserCardProps} props
 */
export default function PageSandbox() {

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <UserCard loading={false}
                selected={false}
                handleSelect={(id) => { alert(`Select (or not) ${id}`) }}
                userID={"bla-blu-fla"}
                userName={"Nome Sobrenome Só que muito grande "}
                userEmail={"superdupermegauberhugeemail@frst.com"}
                userStatus={"complete"}
                userArea={"Desenvolvimento"}
                userPosition={"FullFull Strack"}
                licenses={[]}
                editAction={() => { alert('Edit') }} />

        </div >
    )
}
