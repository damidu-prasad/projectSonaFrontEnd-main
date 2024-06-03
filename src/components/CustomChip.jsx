import React from 'react'
import { Button, Chip } from '@material-tailwind/react';

const CustomChip = ({}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            {!open && (
            <Button className="absolute py-2" variant='outlined' onClick={() => setOpen(true)}>
                Custom Animation
            </Button>
            )}
            <Chip
                open={open}
                className='border-[1px] py-2 pe-[16px]'
                value="Custom Animation"
                onClose={() => setOpen(false)}
            />
        </div>
    )
}

export default CustomChip