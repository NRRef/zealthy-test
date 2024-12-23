'use client'

import React, { ReactNode, useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragOverlay, DragStartEvent, DragEndEvent } from '@dnd-kit/core';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { ComponentItem, ComponentSection, Container, DropZone, FormName, FormSection, SubmitButton } from './styles';
import { Button } from '../../styles';
import { submitNewForm } from '@/services';
import { useRouter } from 'next/navigation';

const components = ['AboutMe', 'BirthDate', 'Address'];

interface DragAndDroppable {
  id: string | number;
  children: ReactNode;
}

const Draggable = ({ id, children }:DragAndDroppable) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });
  return (
    <ComponentItem ref={setNodeRef}  {...listeners} {...attributes}>
      {children}
    </ComponentItem>
  );
};

const Droppable = ({ id, children }:DragAndDroppable) => {
  const { setNodeRef } = useDroppable({ id });
  return <DropZone ref={setNodeRef}>{children}</DropZone>;
};

const CreateForm = () => {
  const [name, setName] = useState<string>('');
  const [step2, setStep2] = useState<string[]>([]);
  const [step3, setStep3] = useState<string[]>([]);
  const [availableComponents, setAvailableComponents] = useState(components);
  const [activeId, setActiveId] = useState<string|number|null>(null);
  const router = useRouter();

  const sensors = useSensors(
    useSensor(PointerSensor)
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (over) {
      const component = active.id;
      if (over.id === 'step2' && availableComponents.includes(component as string)) {
        setStep2([...step2, component as string]);
        setAvailableComponents(availableComponents.filter(c => c !== component));
      } else if (over.id === 'step3' && availableComponents.includes(component as string)) {
        setStep3([...step3, component as string]);
        setAvailableComponents(availableComponents.filter(c => c !== component));
      } else if (over.id === 'available') {
        if (step2.includes(component as string)) {
          setStep2(step2.filter(c => c !== component));
          setAvailableComponents([...availableComponents, component as string]);
        } else if (step3.includes(component as string)) {
          setStep3(step3.filter(c => c !== component));
          setAvailableComponents([...availableComponents, component as string]);
        }
      }
    }
  };

  const handleSubmit = async () => {
    if (!name || step2.length === 0 || step3.length === 0) {
      alert('Please fill in all fields and ensure each step has at least one component');
      return;
    }
    submitNewForm(name, [["UserSignup"], step2, step3])
      .then(()=>{
        alert('Submitted successfully');
      })
      .catch((e)=>{
        alert(`Error on submission: ${e.message}`);
      })
      .finally(()=>router.push('/admin/form'))
  };

  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Container>
        <FormSection>
          <FormName
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Form Name"
          />
          <Droppable id="step2">
            <h3>Step 2</h3>
            {step2.map(component => (
              <Draggable key={component} id={component}>
                {component}
              </Draggable>
            ))}
          </Droppable>
          <Droppable id="step3">
            <h3>Step 3</h3>
            {step3.map(component => (
              <Draggable key={component} id={component}>
                {component}
              </Draggable>
            ))}
          </Droppable>
        </FormSection>
        <ComponentSection>
          <h3>Available Components</h3>
          <Droppable id="available">
            {availableComponents.map(component => (
              <Draggable key={component} id={component}>
                {component}
              </Draggable>
            ))}
          </Droppable>
        </ComponentSection>
      </Container>
      <Container>
        <Button href="/admin/form">Back to forms</Button>
        <SubmitButton onClick={handleSubmit}>Create Form</SubmitButton>
      </Container>
      
      <DragOverlay>
        {activeId ? <ComponentItem>{activeId}</ComponentItem> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default CreateForm;