function createMockJoi(){
  const mockSchema = { validate: () => {} };

  return new Proxy({}, {
    get(){
      return () => mockSchema;
    }
  });
}

async function createJoi(){
  if (!import.meta.env.DEV) return createMockJoi();
  return (await import('joi')).default;
}

export const J = await createJoi();

export function validateProps(schema, props, componentName){
  if (!import.meta.env.DEV) return props;

  const validationResult = schema.validate(props, { abortEarly: false }); 

  if (validationResult.error){
    const details = validationResult.error.details;
    details.forEacha((error) => {
      console.warn(
        `[${componentName}] Validation Error: ${error.message}`);
    })
  }

  return validationResult.value;
}