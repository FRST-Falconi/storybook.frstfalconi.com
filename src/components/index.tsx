import UserCard from '@components/cards/user'


export interface PageProps {
    pageHeight: string,
    pageWidth: string,
}

export default function PageSandbox(props: PageProps) {

    return (
        <div style={{ width: props.pageWidth, height: props.pageHeight }}>
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
                editAction={() => { alert('Edit') }} 
                newFormat={true} 
                newLicenses={[
                    {hasLicense: true, hasTrail: false, hasEnrollment: false, isCurrent: true, name: 'Produto 1'},
                    {hasLicense: true, hasTrail: false, hasEnrollment: false, isCurrent: true, name: 'Produto 2'},
                    {hasLicense: true, hasTrail: true, hasEnrollment: false, isCurrent: true, name: 'Produto 3'},
                    {hasLicense: true, hasTrail: true, hasEnrollment: false, isCurrent: true, name: 'Produto 4'},
                    {hasLicense: true, hasTrail: true, hasEnrollment: true, isCurrent: true, name: 'Produto 5'},
                    {hasLicense: true, hasTrail: true, hasEnrollment: true, isCurrent: true, name: 'Produto 6'},
                    {hasLicense: true, hasTrail: true, hasEnrollment: true, isCurrent: false, name: 'Produto 7'},
                    {hasLicense: true, hasTrail: true, hasEnrollment: true, isCurrent: false, name: 'Produto 8'},
                ]}
                newTexts={{ 
                    current: 'Atual',
                    assignedLicense: 'Licença atribuida',
                    definedTrail: 'Trilha definida',
                    enrollments: 'Matriculado',
                    previus: 'Anteriores',
                }}
                />

        </div >
    )
}
