import React, { useEffect, useRef, useState } from 'react'
import { IResourceInfoDrop } from './resourceInfoDrop';
import { 
    Dropdown,
    DropdownButton, 
    OrnamentInfo, 
    OrnamentInfoIntern, 
    WrapperDropdownButton, 
    WrapperExpandButton,
    WrapperContent,
    ItemContent,
    ItemContentLabel } from './styles';
import { ArrrowExpandDropdown } from '@shared/icons';
import TargetIcon from './../../../../public/img/TargetIcon.png'

const ResourceInfoDrop = ({
    label,
    isOpen,
    onOpen,
    onClose,
    options,
    enablePulse
}: IResourceInfoDrop) => {
    const wrapperRef = useRef(null)
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        setIsOpenDrop(isOpen)
        const intervalId = setInterval(() => {
            setIsPulsing(true);
            setTimeout(() => setIsPulsing(false), 1500);
        }, 5000); 
    },[isOpen])
    
    const [enableTrackChange, setEnableTrackChange] = useState(false);
    useEffect(() => {
        if(enableTrackChange) {
            if(isOpenDrop) {
                onOpen?.()
            } else {
                onClose?.()
            }
        } else {
            setTimeout(() => {
                setEnableTrackChange(true)
            }, 2000)
        }
    },[isOpenDrop])

    const toggleDropdown = () => {
        setIsOpenDrop(!isOpenDrop);
    };

    useEffect(() => {
        function handleClickOutside(event: any) {
            if(wrapperRef.current && !wrapperRef.current.contains(event.target) && isOpenDrop) setIsOpenDrop(false)
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [wrapperRef, isOpenDrop])

    return (
        <Dropdown ref={wrapperRef}  onClick={toggleDropdown}>
            <WrapperDropdownButton isPulsing={enablePulse && isPulsing}>
                <OrnamentInfo >
                    <OrnamentInfoIntern>
                        <img src={TargetIcon} alt='' />
                    </OrnamentInfoIntern>
                </OrnamentInfo>
                <DropdownButton >
                    { label }
                    <WrapperExpandButton  isExpanded={isOpenDrop}>
                        <ArrrowExpandDropdown stroke={"#fff"} strokeWidth={"1.3"}/>
                    </WrapperExpandButton>
                </DropdownButton>
            </WrapperDropdownButton>
            <WrapperContent isOpen={isOpenDrop}>
                { options?.map((item, index) => {
                    return (
                    <ItemContent 
                        key={item.id} 
                        onClick={() => item?.onClick?.(item?.id)}
                    >
                        <ItemContentLabel 
                            isLastItem={options?.length -1 == index}
                        >
                            {item.startWithIcon} {item.label} {item.endWithIcon}
                        </ItemContentLabel>
                    </ItemContent>)
                })}
            </WrapperContent>
        </Dropdown>
    );
};

export default ResourceInfoDrop;
