// Interfaces generated with https://app.quicktype.io/

export interface StackOverflowSearchResult {
  items: StackOverflowItem[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface StackOverflowItem {
  tags: string[];
  owner: StackOverflowOwner;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  question_id: number;
  content_license: ContentLicense;
  link: string;
  title: string;
  last_edit_date?: number;
  accepted_answer_id?: number;
  bounty_amount?: number;
  bounty_closes_date?: number;
}

export enum ContentLicense {
  CcBySa30 = 'CC BY-SA 3.0',
  CcBySa40 = 'CC BY-SA 4.0',
}

export interface StackOverflowOwner {
  reputation: number;
  user_id: number;
  user_type: UserType;
  accept_rate?: number;
  profile_image: string;
  display_name: string;
  link: string;
}

export enum UserType {
  Registered = 'registered',
}
