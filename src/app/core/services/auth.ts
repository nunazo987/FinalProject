import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private supabase: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  //FIQUEI AQUI, A MEIO DE INCORPORAR O SUPABASE NO LOGIN, A METER NO AUTH

  async login(user: string, password: string): Promise <boolean> {

    const { data, error } = await this.supabase
    .from('boxbox_login_db')
    .select('*')
    .eq('user', user)
    .eq('password', password)
    .single();

    return !!data && !error
  }

  async register(user: string, password: string): Promise<boolean> {
  const { data, error } = await this.supabase
    .from('boxbox_login_db') 
    .insert([{ user, password }])
    .select()
    .single();

  return !!data && !error;
}

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
  }
}
