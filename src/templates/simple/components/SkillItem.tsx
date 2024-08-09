import React from 'react'
import { Rating } from '@mui/material'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
interface SkillItemProp {
    title: string,
    level: number,
}
interface CustomeRatingProp {
    level: number
}
const CustomeRating:React.FC<CustomeRatingProp> = ({ level }) => {
    return (
        <Rating 
            value={level}
            readOnly
            precision={0.1}
            icon={
                <FontAwesomeIcon 
                    icon={faCircle}
                    style={{ color: '#A8A29E' , fontSize: '1rem'}}
                />
            }
            emptyIcon={
                <FontAwesomeIcon 
                    icon={faCircle}
                    style={{ color: '#F4F4F5' , fontSize: '1rem'}}
                />
            }
            sx={{
                '& .MuiRating-icon': {
                  marginRight: '6px', // Adjust spacing between icons if needed
                },
              }}
        />
    )
}

export const SkillItem:React.FC<SkillItemProp> = ({title, level}) => {
  return (
    <div className="flex flex-col items-start gap-1">
        <div className="capitalize">{title}</div>
        <CustomeRating level={level} />
        {/* <Rating size="small" value={level} readOnly precision={0.1} icon={<FontAwesomeIcon icon={faCircle} />} emptyIcon={<FontAwesomeIcon icon={faCircle} />} /> */}
    </div>
  )
}