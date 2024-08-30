import { z } from 'zod';

export const driverSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  phone_number: z
    .string()
    .nonempty('Valid phone number is required')
    .regex(/^[0-9]{10}$/, 'Phone number must be a 10-digit number'),

  vehicle_number: z.string().min(1, { message: 'Vehicle number is required' }),
  vehicle_model: z.string().min(1, { message: 'Vehicle model is required' }),
  license_number: z.string().min(1, { message: 'License number is required' }),
  status: z.enum(['active', 'inactive']).optional(),
});
