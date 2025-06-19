export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      skills: {
        Row: {
          id: string
          name: string
          level: number
          color: string
          icon: string
          category: "frontend" | "backend" | "mobile" | "tools"
          order_index: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          level: number
          color: string
          icon: string
          category: "frontend" | "backend" | "mobile" | "tools"
          order_index?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          level?: number
          color?: string
          icon?: string
          category?: "frontend" | "backend" | "mobile" | "tools"
          order_index?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          slug: string
          title: string
          description: string
          long_description: string
          tech: Json
          type: "Production" | "Freelance" | "Personnel"
          status: string
          image_url: string | null
          color: string
          github_url: string | null
          demo_url: string | null
          metrics: string | null
          is_featured: boolean
          order_index: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          description: string
          long_description: string
          tech?: Json
          type: "Production" | "Freelance" | "Personnel"
          status: string
          image_url?: string | null
          color: string
          github_url?: string | null
          demo_url?: string | null
          metrics?: string | null
          is_featured?: boolean
          order_index?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          description?: string
          long_description?: string
          tech?: Json
          type?: "Production" | "Freelance" | "Personnel"
          status?: string
          image_url?: string | null
          color?: string
          github_url?: string | null
          demo_url?: string | null
          metrics?: string | null
          is_featured?: boolean
          order_index?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      timeline_items: {
        Row: {
          id: string
          date_range: string
          title: string
          company: string
          description: string
          type: "formation" | "experience" | "projet"
          status: string
          icon: string
          order_index: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          date_range: string
          title: string
          company: string
          description: string
          type: "formation" | "experience" | "projet"
          status: string
          icon: string
          order_index?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          date_range?: string
          title?: string
          company?: string
          description?: string
          type?: "formation" | "experience" | "projet"
          status?: string
          icon?: string
          order_index?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          role: string
          company: string
          content: string
          avatar_url: string | null
          order_index: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          company: string
          content: string
          avatar_url?: string | null
          order_index?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          company?: string
          content?: string
          avatar_url?: string | null
          order_index?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      social_links: {
        Row: {
          id: string
          name: string
          url: string
          icon: string
          color: string
          order_index: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          url: string
          icon: string
          color: string
          order_index?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          url?: string
          icon?: string
          color?: string
          order_index?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      site_settings: {
        Row: {
          id: string
          key: string
          value: Json
          description: string | null
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value: Json
          description?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value?: Json
          description?: string | null
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
