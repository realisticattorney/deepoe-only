import { Dialog, Disclosure, Transition } from '@headlessui/react';
import React, { FC, Fragment, useRef, useState } from 'react';
import { Builder } from '@builder.io/react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const Accordion = styled((props) => (
  <MuiAccordion:any disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  // '&:not(:last-child)': {
  backgroundColor: '#F5F3EE',
  borderBottom: '1px solid rgba(0, 0, 0, 1)',
  // paddingBottom: "1px",
  // },
  '&:before': {
    display: 'none',
  },
}));

const Icon = styled((props) => (
  <div {...props}>
    <div className="n">
      <RemoveIcon className="h-5 w-5" />
    </div>
    <div className="y">
      <AddIcon className="h-5 w-5" />
    </div>
  </div>
))`
  & > .y {
    display: block;
  }
  & > .n {
    display: none;
  }
  .Mui-expanded & > .n {
    display: block;
  }
  .Mui-expanded & > .y {
    display: none;
  }
`;

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<Icon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  paddingLeft: '0px',
  paddingRight: '0px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    // transform: 'rotate(90deg)',
    marginRight: '0px',
    paddingRight: '0px',
  },

  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
}));

const FaqSection = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className=" w-full px-2.5 font-mono">
      <div className="w-full max-w-md  mx-auto bg-deepoe-cream rounded-2xl space-y-5">
        <h3 className="text-3xl pt-5 py-2 font-thin px-3 tracking-tighter">
          Frequently Asked Questions
        </h3>
      </div>
    </div>
  );
};

Builder.registerComponent(FaqSection, {
  name: 'FaqSection',
});

export default FaqSection;
