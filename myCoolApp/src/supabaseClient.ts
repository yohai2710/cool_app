import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cmuwtncygyrufelgtuww.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtdXd0bmN5Z3lydWZlbGd0dXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNTQ4ODcsImV4cCI6MjA2MTkzMDg4N30._nukMQWXmqA3o4I5Nm6SasTivVXvw7MNiNU408xEmuk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
