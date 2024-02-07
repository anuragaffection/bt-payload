/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    Blog: Blog;
    media: Media;
    mediaCollectionUpload: MediaCollectionUpload;
    Players: Player;
    sections: Section;
    sponsors: Sponsor;
    Carousel: Carousel;
    mediaCollection: MediaCollection;
    Teams: Team;
    Fixtures: Fixture;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface Blog {
  id: string;
  Cover_Image?: string | Media | null;
  slug?: string | null;
  Title?: string | null;
  Secondary_Text?: string | null;
  Tag?: string | null;
  Blog_content?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  Blog_content_html?: string | null;
  Blog_content_output?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  Name?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface MediaCollectionUpload {
  id: string;
  Title?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface Player {
  id: string;
  Image?: string | Media | null;
  first_name?: string | null;
  last_name?: string | null;
  number?: number | null;
  positions?: string | null;
  height?: number | null;
  country_code?: ('IN' | 'BR' | 'AU') | null;
  updatedAt: string;
  createdAt: string;
}
export interface Section {
  id: string;
  Title?: string | null;
  Anchor?: string | null;
  Image?: string | Media | null;
  Description?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Sponsor {
  id: string;
  Image?: string | Media | null;
  Sponsor_Name?: string | null;
  Sponsor_Type?: string | null;
  Sponsor_Tag?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Carousel {
  id: string;
  Cover?: string | Media | null;
  Title?: string | null;
  Link?: (string | null) | Blog;
  Description?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface MediaCollection {
  id: string;
  Collection_Title?: string | null;
  slug?: string | null;
  Images?:
    | {
        Image?: string | MediaCollectionUpload | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface Team {
  id: string;
  Team_Name?: string | null;
  Team_Logo?: string | Media | null;
  updatedAt: string;
  createdAt: string;
}
export interface Fixture {
  id: string;
  Match_No: number;
  Date: string;
  Team_1: string | Team;
  Team_2: string | Team;
  Round_Type: string;
  Status: string;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}