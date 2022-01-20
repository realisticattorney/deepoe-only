import { Dialog, Disclosure, Transition } from '@headlessui/react';
import React, { FC, Fragment, useRef, useState } from 'react';
import { Builder } from '@builder.io/react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  // '&:not(:last-child)': {
  backgroundColor: '#F5F3EE',
  marginLeft: 'auto',
  marginRight: 'auto',
  justifySelf: 'center',
  width: '90%',
  borderBottom: '1px solid rgba(0, 0, 0, 0.8)',
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

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<Icon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  // paddingLeft: '20px',
  paddingRight: '0px',

  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    // transform: 'rotate(90deg)',
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

const FaqQuestion = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className=" w-full px-2.5  font-mono">
      <div className="w-full max-w-md  mx-auto bg-deepoe-cream  space-y-5">
        <div className="flex flex-col w-full">
          <h4 className="px-0 truncate text-2xl font-light text-gray-800">
            {props.title}
          </h4>
          <Accordion className="p-0 m-0 shadow-none    border-b border-deepoe_default-black ">
            <AccordionSummary
              aria-controls="panel1b-content"
              id="panel1b-header"
              className="flex p-0   justify-between text-lg font-extralight text-left text-deepoe_default-black"
            >
              <p className="font-mono font-extralight text-lg2 py-0 my-0 ">
                {props.firstQuestion}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <div className="overflow-hidden duration-300  text-sm  font-mono  text-left font-extralight  ">
                <p className="mb-4">{props.firstAnswer}</p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="p-0 m-0 shadow-none    border-b border-deepoe_default-black ">
            <AccordionSummary
              aria-controls="panel2b-content"
              id="panel2b-header"
              className="flex p-0   justify-between text-lg font-extralight text-left text-deepoe_default-black"
            >
              <p className="font-mono font-extralight text-lg2 py-0 my-0 ">
                {props.secondQuestion}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <div className="overflow-hidden duration-300  text-sm  font-mono  text-left font-extralight  ">
                <p className="mb-4">{props.secondAnswer}</p>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="p-0 m-0 shadow-none    border-b border-deepoe_default-black ">
            <AccordionSummary
              aria-controls="panel3b-content"
              id="panel3b-header"
              className="flex p-0   justify-between text-lg font-extralight text-left text-deepoe_default-black"
            >
              <p className="font-mono font-extralight text-lg2 py-0 my-0 ">
                {props.thirdQuestion}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <div className="overflow-hidden duration-300  text-sm  font-mono  text-left font-extralight  ">
                <p className="mb-4">{props.thirdAnswer}</p>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

Builder.registerComponent(FaqQuestion, {
  name: 'FaqQuestion',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Orders/Products/Miscellaneous',
    },
    {
      name: 'firstQuestion',
      type: 'string',
      defaultValue: "Where's my order, dude?",
    },
    {
      name: 'firstAnswer',
      type: 'text',
      defaultValue:
        '  Please contact us as soon as possible with your order number and email and we will try our best to accomodate your request. Please note that some orders may not be cancellable after leaving our warehouse.',
    },
    {
      name: 'secondQuestion',
      type: 'string',
      defaultValue: 'How can I change or cancel my order?',
    },
    {
      name: 'secondAnswer',
      type: 'text',
      defaultValue:
        '  Please contact us as soon as possible with your order number and email and we will try our best to accomodate your request. Please note that some orders may not be cancellable after leaving our warehouse.',
    },
    {
      name: 'thirdQuestion',
      type: 'string',
      defaultValue: 'Does your items have a warranty?',
    },
    {
      name: 'thirdAnswer',
      type: 'text',
      defaultValue:
        '  Please contact us as soon as possible with your order number and email and we will try our best to accomodate your request. Please note that some orders may not be cancellable after leaving our warehouse.',
    },
  ],
});

export default FaqQuestion;
