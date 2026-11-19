import { useEffect, useId, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  CornerDownLeft,
  FileText,
  ImagePlus,
  Loader2,
  Mail,
  Plus,
  Trash2,
  Upload,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { TelegramIcon, WhatsAppIcon } from './SocialIcons';
import {
  BIODATA_COMPLETED_STORAGE_KEY,
  CONTRIBUTION_OPTIONS,
  CORE_FOCUS_OPTIONS,
  COUNTRIES,
  EXPECTATION_OPTIONS,
  FORM_STEPS,
  GENDER_OPTIONS,
  HOBBY_OPTIONS,
  INITIAL_COMMUNITY_FORM_DATA,
  LMU_DEPARTMENTS,
  LMU_HALL_OPTIONS,
  LMU_LEVEL_OPTIONS,
  OCCUPATION_OPTIONS,
  PRIMARY_DISCIPLINES,
  SECONDARY_DISCIPLINE_OPTIONS,
  SOCIAL_PLATFORMS,
  TELEGRAM_INVITE_URL,
  TOOL_AND_SKILL_OPTIONS,
  WHATSAPP_INVITE_URL,
  type CommunityMemberFormData,
} from '../data/communityFormOptions';

type FormErrors = Partial<Record<string, string>>;

function countWords(text: string): number {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

function resolveOtherOption(selected: string, customValue: string): string {
  if (selected === 'Other') {
    return customValue.trim() || 'Other';
  }
  return selected.trim();
}

function toggleArrayItem(list: string[], item: string, maxItems?: number): string[] {
  if (list.includes(item)) {
    return list.filter((entry) => entry !== item);
  }
  if (maxItems !== undefined && list.length >= maxItems) {
    return list;
  }
  return [...list, item];
}

function buildStoragePath(folder: 'photos' | 'samples', fullName: string, fileName: string): string {
  const slug =
    fullName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') || 'member';
  const extMatch = fileName.match(/\.([a-zA-Z0-9]+)$/);
  const ext = extMatch ? extMatch[1].toLowerCase() : 'bin';
  const randomSuffix = Math.random().toString(36).slice(2, 8);
  return `${folder}/${Date.now()}-${slug}-${randomSuffix}.${ext}`;
}

function underlineInputClassName(hasError?: boolean, compact?: boolean): string {
  const sizeClasses = compact
    ? 'min-h-[44px] py-2 text-base sm:text-lg'
    : 'min-h-[46px] sm:min-h-[50px] py-2.5 sm:py-3 text-base sm:text-lg md:text-xl';
  return `${sizeClasses} min-w-0 max-w-full w-full bg-transparent border-0 border-b-2 px-0 font-sans font-medium text-white placeholder:text-zinc-600 transition-colors focus:outline-none focus:ring-0 ${
    hasError
      ? 'border-red-500 focus:border-red-400'
      : 'border-white/20 hover:border-white/35 focus:border-[#FFCC00]'
  }`;
}

function textareaClassName(hasError?: boolean): string {
  return `w-full min-w-0 border-0 border-b-2 rounded-t-lg px-3.5 sm:px-4 py-3 sm:py-3.5 font-sans text-base sm:text-lg text-white placeholder:text-zinc-600 transition-colors focus:outline-none focus:ring-0 resize-y ${
    hasError
      ? 'border-red-500 bg-red-500/[0.04] focus:border-red-400'
      : 'border-white/20 bg-white/[0.02] hover:bg-white/[0.03] focus:border-[#FFCC00] focus:bg-white/[0.04]'
  }`;
}

interface TypeformPromptProps {
  number?: string;
  htmlFor?: string;
  label: string;
  required?: boolean;
  optionalText?: string;
  hint?: string;
  error?: string;
}

function TypeformPrompt({
  number,
  htmlFor,
  label,
  required,
  optionalText,
  hint,
  error,
}: TypeformPromptProps) {
  return (
    <div className="mb-2.5 sm:mb-3.5">
      {(number || optionalText) && (
        <div className="flex items-center justify-between gap-2 mb-1">
          {number ? (
            <span
              aria-hidden="true"
              className="inline-flex items-center gap-1 font-mono text-xs sm:text-sm font-semibold text-[#FFCC00] shrink-0"
            >
              <span>{number}</span>
              <span>→</span>
            </span>
          ) : (
            <span />
          )}
          {optionalText && (
            <span className="text-[11px] sm:text-xs font-mono text-zinc-400 shrink-0">
              {optionalText}
            </span>
          )}
        </div>
      )}
      <label
        htmlFor={htmlFor}
        className="block font-display text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white leading-snug"
      >
        {label}
        {required && <span className="ml-1 text-[#FFCC00]">*</span>}
      </label>
      {hint && (
        <p className="mt-1 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
          {hint}
        </p>
      )}
      {error && (
        <p className="mt-1.5 font-sans text-xs sm:text-sm font-medium text-red-400">{error}</p>
      )}
    </div>
  );
}

interface StudioSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder: string;
  hasError?: boolean;
}

function StudioSelect({ id, value, onChange, options, placeholder, hasError }: StudioSelectProps) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ colorScheme: 'dark' }}
        className={`${underlineInputClassName(hasError)} appearance-none pr-9 cursor-pointer ${
          value ? 'text-white' : 'text-zinc-500'
        }`}
      >
        <option value="" className="bg-[#111111] text-zinc-400 text-base">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#111111] text-white text-base">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400"
      />
    </div>
  );
}

interface CheckboxGridProps {
  options: readonly string[];
  selected: string[];
  onToggle: (item: string) => void;
  maxSelected?: number;
  columnsClass?: string;
  customPlaceholder?: string;
  onAddCustom?: (value: string) => void;
}

function CheckboxGrid({
  options,
  selected,
  onToggle,
  maxSelected,
  columnsClass = 'grid-cols-1 sm:grid-cols-2',
  customPlaceholder,
  onAddCustom,
}: CheckboxGridProps) {
  const [customDraft, setCustomDraft] = useState('');
  const mergedOptions = Array.from(new Set([...options, ...selected]));
  const limitReached = maxSelected !== undefined && selected.length >= maxSelected;

  const handleAdd = () => {
    const trimmed = customDraft.trim();
    if (!trimmed || !onAddCustom) return;
    if (!selected.includes(trimmed) && limitReached) return;
    onAddCustom(trimmed);
    setCustomDraft('');
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className={`grid ${columnsClass} gap-2 sm:gap-3`}>
        {mergedOptions.map((item, idx) => {
          const isChecked = selected.includes(item);
          const isDisabled = !isChecked && limitReached;
          const keyLabel = String.fromCharCode(65 + (idx % 26));

          return (
            <label
              key={item}
              className={`min-h-[44px] flex items-center gap-2 sm:gap-3 rounded-lg border px-2.5 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-base font-medium transition-all select-none ${
                isChecked
                  ? 'border-[#FFCC00] bg-[#FFCC00]/[0.12] text-white cursor-pointer'
                  : isDisabled
                  ? 'border-white/5 bg-white/[0.01] text-zinc-600 cursor-not-allowed'
                  : 'border-white/15 bg-white/[0.03] text-zinc-200 hover:border-white/35 hover:bg-white/[0.06] cursor-pointer'
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                disabled={isDisabled}
                onChange={() => onToggle(item)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={`flex h-[18px] w-[18px] sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded font-mono text-[11px] sm:text-xs font-bold transition-colors ${
                  isChecked
                    ? 'border border-[#FFCC00] bg-[#FFCC00] text-zinc-950'
                    : 'border border-white/25 bg-black/40 text-zinc-400'
                }`}
              >
                <span className="hidden sm:inline">{keyLabel}</span>
                {isChecked && <Check className="sm:hidden h-3 w-3 stroke-[3]" />}
              </span>
              <span className="leading-snug flex-1 min-w-0 break-words">{item}</span>
              {isChecked && (
                <Check className="hidden sm:block h-4 w-4 shrink-0 text-[#FFCC00] stroke-[2.75]" />
              )}
            </label>
          );
        })}
      </div>

      {onAddCustom && (
        <div className="flex flex-col sm:flex-row sm:items-end gap-3 pt-1">
          <input
            type="text"
            data-custom-tag-input="true"
            value={customDraft}
            onChange={(e) => setCustomDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAdd();
              }
            }}
            disabled={limitReached}
            placeholder={limitReached ? `Limit of ${maxSelected} reached` : customPlaceholder}
            className={`${underlineInputClassName(false, true)} flex-1 disabled:opacity-50`}
          />
          <button
            type="button"
            onClick={handleAdd}
            disabled={!customDraft.trim() || limitReached}
            className="min-h-[46px] inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.06] px-4 text-sm font-medium text-zinc-200 transition-colors hover:border-[#FFCC00]/50 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default function CommunityBioForm() {
  const formTopRef = useRef<HTMLDivElement>(null);
  const photoInputId = useId();
  const sampleInputId = useId();

  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<CommunityMemberFormData>(INITIAL_COMMUNITY_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);
  const [workSampleFile, setWorkSampleFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [uploadWarning, setUploadWarning] = useState<string | null>(null);

  useEffect(() => {
    if (!photoFile) {
      setPhotoPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(photoFile);
    setPhotoPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [photoFile]);

  const currentStep = FORM_STEPS[stepIndex];
  const bioWordCount = countWords(formData.shortBio);

  const updateField = <K extends keyof CommunityMemberFormData>(
    key: K,
    value: CommunityMemberFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const clearError = (key: string) => {
    if (!errors[key]) return;
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validateStep = (index: number): FormErrors => {
    const nextErrors: FormErrors = {};

    if (index === 0) {
      if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        nextErrors.email = 'Please enter a valid email address.';
      }
      if (formData.whatsappNumber.replace(/\D/g, '').length < 7) {
        nextErrors.whatsappNumber = 'Please enter a valid WhatsApp number with country code.';
      }
      if (!formData.gender) nextErrors.gender = 'Please select your gender.';
      if (!formData.dateOfBirth) nextErrors.dateOfBirth = 'Please select your date of birth.';
      if (!formData.country) {
        nextErrors.country = 'Please select your country.';
      } else if (formData.country === 'Other' && !formData.customCountry.trim()) {
        nextErrors.customCountry = 'Please specify your country.';
      }

      if (formData.chapter === 'LMU Chapter') {
        if (!formData.schoolName.trim()) nextErrors.schoolName = 'Please enter your school name.';
        if (!formData.courseDepartment) {
          nextErrors.courseDepartment = 'Please select your course or department.';
        } else if (
          formData.courseDepartment === 'Other' &&
          !formData.customCourseDepartment.trim()
        ) {
          nextErrors.customCourseDepartment = 'Please specify your course or department.';
        }
        if (!formData.level) nextErrors.level = 'Please select your level.';
        if (!formData.hall) nextErrors.hall = 'Please select your hall.';
        if (!formData.roomNumber.trim()) nextErrors.roomNumber = 'Please enter your room number.';
      } else {
        if (!formData.currentOccupation) {
          nextErrors.currentOccupation = 'Please select your current occupation.';
        } else if (
          formData.currentOccupation === 'Other' &&
          !formData.customOccupation.trim()
        ) {
          nextErrors.customOccupation = 'Please specify your current occupation.';
        }
      }
    }

    if (index === 1) {
      if (!formData.primaryDiscipline) {
        nextErrors.primaryDiscipline = 'Please choose your primary creative discipline.';
      }
      if (formData.coreFocusAreas.length === 0) {
        nextErrors.coreFocusAreas = 'Select at least 1 core focus area (up to 3).';
      }
      if (bioWordCount < 50 || bioWordCount > 150) {
        nextErrors.shortBio = `Short bio must be between 50 and 150 words (currently ${bioWordCount} ${
          bioWordCount === 1 ? 'word' : 'words'
        }).`;
      }
      if (!formData.passionDrive.trim()) {
        nextErrors.passionDrive = 'Share briefly what drives or inspires your work.';
      }
    }

    if (index === 3) {
      if (formData.communityExpectations.length === 0) {
        nextErrors.communityExpectations = 'Select at least one option.';
      }
      if (formData.communityContributions.length === 0) {
        nextErrors.communityContributions = 'Select at least one way you can contribute.';
      }
    }

    return nextErrors;
  };

  const scrollToFormTop = () => {
    formTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNextStep = () => {
    const stepErrors = validateStep(stepIndex);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      scrollToFormTop();
      return;
    }
    setErrors({});
    setStepIndex((prev) => Math.min(prev + 1, FORM_STEPS.length - 1));
    scrollToFormTop();
  };

  const handleStepTabClick = (targetIndex: number) => {
    if (targetIndex <= stepIndex) {
      setErrors({});
      setStepIndex(targetIndex);
      return;
    }

    for (let i = stepIndex; i < targetIndex; i += 1) {
      const stepErrors = validateStep(i);
      if (Object.keys(stepErrors).length > 0) {
        setStepIndex(i);
        setErrors(stepErrors);
        scrollToFormTop();
        return;
      }
    }
    setErrors({});
    setStepIndex(targetIndex);
  };

  const handlePhotoChange = (file: File | null) => {
    if (!file) {
      setPhotoFile(null);
      clearError('photoFile');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        photoFile: 'Portrait photo must be 5MB or smaller.',
      }));
      return;
    }
    clearError('photoFile');
    setPhotoFile(file);
  };

  const handleSampleFileChange = (file: File | null) => {
    if (!file) {
      setWorkSampleFile(null);
      clearError('workSampleFile');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        workSampleFile: 'Work sample or CV file must be 10MB or smaller.',
      }));
      return;
    }
    clearError('workSampleFile');
    setWorkSampleFile(file);
  };

  const uploadOptionalFile = async (
    file: File | null,
    folder: 'photos' | 'samples'
  ): Promise<{ url: string | null; failed: boolean }> => {
    if (!file || !supabase) return { url: null, failed: false };
    const path = buildStoragePath(folder, formData.fullName, file.name);
    const { error } = await supabase.storage
      .from('community-media')
      .upload(path, file, { upsert: false });

    if (error) {
      return { url: null, failed: true };
    }
    const { data } = supabase.storage.from('community-media').getPublicUrl(path);
    return { url: data.publicUrl, failed: false };
  };

  const handleFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key !== 'Enter') return;
    const target = e.target as HTMLElement;
    if (target.tagName !== 'INPUT') return;
    const input = target as HTMLInputElement;
    if (input.type === 'file' || input.dataset.customTagInput === 'true') return;

    if (stepIndex < FORM_STEPS.length - 1) {
      e.preventDefault();
      handleNextStep();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep(stepIndex);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      scrollToFormTop();
      return;
    }

    if (!supabase) {
      setSubmitError(
        'Database connection is not configured in this environment yet. Check your Supabase environment variables.'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setUploadWarning(null);

    try {
      const [photoUpload, sampleUpload] = await Promise.all([
        uploadOptionalFile(photoFile, 'photos'),
        uploadOptionalFile(workSampleFile, 'samples'),
      ]);

      if (photoUpload.failed || sampleUpload.failed) {
        setUploadWarning(
          'Your bio-data was saved, though file upload requires the "community-media" storage bucket in Supabase.'
        );
      }

      const cleanedSocials = Object.fromEntries(
        Object.entries(formData.socialLinks)
          .map(([key, value]) => [key, value.trim()])
          .filter(([, value]) => value.length > 0)
      );

      const isLmu = formData.chapter === 'LMU Chapter';

      const payload = {
        full_name: formData.fullName.trim(),
        nickname: formData.nickname.trim() || null,
        email: formData.email.trim().toLowerCase(),
        whatsapp_number: formData.whatsappNumber.trim(),
        gender: formData.gender,
        date_of_birth: formData.dateOfBirth,
        country: resolveOtherOption(formData.country, formData.customCountry),
        chapter: formData.chapter,
        school_name: isLmu ? formData.schoolName.trim() : null,
        course_department: isLmu
          ? resolveOtherOption(formData.courseDepartment, formData.customCourseDepartment)
          : null,
        level: isLmu ? formData.level : null,
        hall: isLmu ? formData.hall : null,
        room_number: isLmu ? formData.roomNumber.trim() : null,
        current_occupation: !isLmu
          ? resolveOtherOption(formData.currentOccupation, formData.customOccupation)
          : null,
        hobbies: !isLmu ? formData.hobbies : [],
        primary_discipline: formData.primaryDiscipline,
        secondary_disciplines: formData.secondaryDisciplines,
        core_focus_areas: formData.coreFocusAreas,
        short_bio: formData.shortBio.trim(),
        tools_and_skills: formData.toolsAndSkills,
        fun_fact: formData.funFact.trim() || null,
        weird_fact: formData.weirdFact.trim() || null,
        passion_drive: formData.passionDrive.trim(),
        portfolio_website: formData.portfolioWebsite.trim() || null,
        social_links: cleanedSocials,
        work_sample_link: formData.workSampleLink.trim() || null,
        work_sample_file_url: sampleUpload.url,
        community_expectations: formData.communityExpectations,
        community_contributions: formData.communityContributions,
        feature_consent: formData.featureConsent,
        profile_photo_url: photoUpload.url,
      };

      const { error } = await supabase.from('community_members').insert(payload);

      if (error) {
        throw new Error(error.message);
      }

      try {
        localStorage.setItem(BIODATA_COMPLETED_STORAGE_KEY, 'true');
      } catch {
        // Ignore storage write errors in restricted browsing modes
      }

      setSubmitSuccess(true);
      scrollToFormTop();
    } catch (err) {
      const message =
        err instanceof Error && err.message
          ? err.message
          : 'Unable to submit your application right now. Please try again.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercent = ((stepIndex + 1) / FORM_STEPS.length) * 100;

  if (submitSuccess) {
    return (
      <div
        ref={formTopRef}
        className="w-full max-w-6xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] p-6 sm:p-10 lg:p-12 text-left"
      >
        <div className="max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded border border-[#FFCC00]/30 bg-[#FFCC00]/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#FFCC00]">
            <Check className="w-3.5 h-3.5" />
            <span>Bio-Data Recorded</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Welcome to the Creative Minds' Forum, {formData.fullName.split(' ')[0]}.
          </h3>

          <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
            Your member profile is saved in our directory. Step into either of our official channels below to connect with fellow creatives right away.
          </p>

          <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-zinc-300">
            <Mail className="w-4 h-4 text-[#FFCC00] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Please check your email inbox
              {formData.email.trim() ? (
                <>
                  {' '}
                  at <span className="font-medium text-white">{formData.email.trim()}</span>
                </>
              ) : null}{' '}
              for confirmation and next steps from the Creative Minds' Forum team.
            </p>
          </div>

          {uploadWarning && (
            <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2.5 text-xs text-amber-200">
              {uploadWarning}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={WHATSAPP_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#FFCC00] px-6 py-3 text-sm sm:text-base font-bold text-zinc-950 transition-colors hover:bg-[#FFE066]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Join on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={TELEGRAM_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:border-[#FFCC00]/60 hover:bg-white/[0.1]"
            >
              <TelegramIcon className="w-4 h-4 text-[#FFCC00]" />
              <span>Join on Telegram</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={formTopRef} className="w-full max-w-6xl mx-auto text-left scroll-mt-28">
      <form
        onSubmit={handleSubmit}
        onKeyDown={handleFormKeyDown}
        noValidate
        className="w-full rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden"
      >
          {/* Top Typeform Progress Line */}
          <div className="h-[3px] w-full bg-white/10">
            <div
              className="h-full bg-[#FFCC00] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Clickable Step Navigation Tabs */}
          <div className="grid grid-cols-4 border-b border-white/10 bg-[#0E0E0E]">
            {FORM_STEPS.map((step, index) => {
              const isActive = index === stepIndex;
              const isCompleted = index < stepIndex;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => handleStepTabClick(index)}
                  className={`min-h-[52px] flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-0.5 sm:gap-2 px-1 sm:px-5 py-2 sm:py-3 text-[11px] sm:text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                    isActive
                      ? 'border-[#FFCC00] text-white bg-white/[0.03]'
                      : isCompleted
                      ? 'border-transparent text-zinc-300 hover:text-white hover:bg-white/[0.02]'
                      : 'border-transparent text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] sm:text-[11px] ${
                      isActive
                        ? 'text-[#FFCC00]'
                        : isCompleted
                        ? 'text-zinc-300'
                        : 'text-zinc-600'
                    }`}
                  >
                    {step.num}
                  </span>
                  <span className="truncate max-w-full">{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Header */}
          <div className="border-b border-white/10 px-4 sm:px-10 py-4 sm:py-6 bg-[#0C0C0C] flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#FFCC00]">
                Section {currentStep.num}
              </p>
              <h2 className="mt-1 font-display text-lg sm:text-2xl font-bold tracking-tight text-white">
                {currentStep.title}
              </h2>
              <p className="mt-1 font-sans text-xs sm:text-sm text-zinc-400">
                {currentStep.subtitle}
              </p>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-zinc-500 shrink-0">
              {currentStep.num} / 04
            </span>
          </div>

          {/* Airy Typeform Question Canvas */}
          <div className="px-4 py-6 sm:px-10 sm:py-10">
            <AnimatePresence mode="wait">
              {stepIndex === 0 && (
                <motion.div
                  key="step-basics"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-7 sm:space-y-11"
                >
                  {/* Personal Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 sm:gap-y-10 [&>*]:min-w-0">
                    <div>
                      <TypeformPrompt
                        number="1"
                        htmlFor="cmf-full-name"
                        label="What's your full name?"
                        required
                        error={errors.fullName}
                      />
                      <input
                        id="cmf-full-name"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        placeholder="Type your answer here..."
                        className={underlineInputClassName(Boolean(errors.fullName))}
                      />
                    </div>

                    <div>
                      <TypeformPrompt
                        number="2"
                        htmlFor="cmf-nickname"
                        label="Do you go by a nickname?"
                        optionalText="Optional"
                      />
                      <input
                        id="cmf-nickname"
                        type="text"
                        value={formData.nickname}
                        onChange={(e) => updateField('nickname', e.target.value)}
                        placeholder="Preferred alias..."
                        className={underlineInputClassName()}
                      />
                    </div>

                    <div>
                      <TypeformPrompt
                        number="3"
                        htmlFor="cmf-email"
                        label="What's your email address?"
                        required
                        error={errors.email}
                      />
                      <input
                        id="cmf-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="name@example.com"
                        className={underlineInputClassName(Boolean(errors.email))}
                      />
                    </div>

                    <div>
                      <TypeformPrompt
                        number="4"
                        htmlFor="cmf-whatsapp"
                        label="Your WhatsApp number?"
                        required
                        error={errors.whatsappNumber}
                      />
                      <input
                        id="cmf-whatsapp"
                        type="tel"
                        value={formData.whatsappNumber}
                        onChange={(e) => updateField('whatsappNumber', e.target.value)}
                        placeholder="+234 800 000 0000"
                        className={underlineInputClassName(Boolean(errors.whatsappNumber))}
                      />
                    </div>

                    <div>
                      <TypeformPrompt
                        number="5"
                        htmlFor="cmf-gender"
                        label="Gender"
                        required
                        error={errors.gender}
                      />
                      <StudioSelect
                        id="cmf-gender"
                        value={formData.gender}
                        onChange={(val) => updateField('gender', val)}
                        options={GENDER_OPTIONS}
                        placeholder="Select an option"
                        hasError={Boolean(errors.gender)}
                      />
                    </div>

                    <div>
                      <TypeformPrompt
                        number="6"
                        htmlFor="cmf-dob"
                        label="Date of birth"
                        required
                        error={errors.dateOfBirth}
                      />
                      <input
                        id="cmf-dob"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => updateField('dateOfBirth', e.target.value)}
                        style={{ colorScheme: 'dark' }}
                        className={underlineInputClassName(Boolean(errors.dateOfBirth))}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <TypeformPrompt
                        number="7"
                        htmlFor="cmf-country"
                        label="Which country are you joining from?"
                        required
                        error={errors.country}
                      />
                      <StudioSelect
                        id="cmf-country"
                        value={formData.country}
                        onChange={(val) => updateField('country', val)}
                        options={COUNTRIES}
                        placeholder="Select your country"
                        hasError={Boolean(errors.country)}
                      />
                    </div>

                    {formData.country === 'Other' && (
                      <div className="sm:col-span-2">
                        <TypeformPrompt
                          number="7b"
                          htmlFor="cmf-custom-country"
                          label="Enter your country"
                          required
                          error={errors.customCountry}
                        />
                        <input
                          id="cmf-custom-country"
                          type="text"
                          value={formData.customCountry}
                          onChange={(e) => updateField('customCountry', e.target.value)}
                          placeholder="Type your country..."
                          className={underlineInputClassName(Boolean(errors.customCountry))}
                        />
                      </div>
                    )}
                  </div>

                  {/* Education & Work Chapter Switcher */}
                  <div className="pt-8 sm:pt-10 border-t border-white/10 space-y-7 sm:space-y-10">
                    <div>
                      <TypeformPrompt
                        number="8"
                        label="Which CMF chapter fits you?"
                        required
                        hint="Choose LMU Chapter if you school at Landmark University, or CMF Global if you do not."
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {(
                          [
                            {
                              keyLabel: 'A',
                              value: 'LMU Chapter',
                              desc: 'Currently schooling at Landmark University',
                            },
                            {
                              keyLabel: 'B',
                              value: 'CMF Global',
                              desc: 'Outside LMU (Global creative or student)',
                            },
                          ] as const
                        ).map((item) => {
                          const isSelected = formData.chapter === item.value;
                          return (
                            <label
                              key={item.value}
                              className={`min-h-[56px] flex items-start gap-2.5 sm:gap-3 rounded-lg border p-3.5 sm:p-4 transition-all cursor-pointer select-none ${
                                isSelected
                                  ? 'border-[#FFCC00] bg-[#FFCC00]/[0.12] text-white'
                                  : 'border-white/15 bg-white/[0.03] text-zinc-200 hover:border-white/35 hover:bg-white/[0.06]'
                              }`}
                            >
                              <input
                                type="radio"
                                name="cmf-chapter"
                                checked={isSelected}
                                onChange={() => updateField('chapter', item.value)}
                                className="sr-only"
                              />
                              <span
                                aria-hidden="true"
                                className={`mt-0.5 flex h-[18px] w-[18px] sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded font-mono text-[11px] sm:text-xs font-bold transition-colors ${
                                  isSelected
                                    ? 'border border-[#FFCC00] bg-[#FFCC00] text-zinc-950'
                                    : 'border border-white/25 bg-black/40 text-zinc-400'
                                }`}
                              >
                                <span className="hidden sm:inline">{item.keyLabel}</span>
                                {isSelected && <Check className="sm:hidden h-3 w-3 stroke-[3]" />}
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="text-sm sm:text-base font-semibold">{item.value}</div>
                                <div className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                              {isSelected && (
                                <Check className="hidden sm:block mt-1 h-4 w-4 shrink-0 text-[#FFCC00] stroke-[2.75]" />
                              )}
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {formData.chapter === 'LMU Chapter' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 sm:gap-y-10 [&>*]:min-w-0">
                        <div className="sm:col-span-2">
                          <TypeformPrompt
                            number="8a"
                            htmlFor="cmf-school"
                            label="School name"
                            required
                            error={errors.schoolName}
                          />
                          <input
                            id="cmf-school"
                            type="text"
                            value={formData.schoolName}
                            onChange={(e) => updateField('schoolName', e.target.value)}
                            placeholder="Landmark University"
                            className={underlineInputClassName(Boolean(errors.schoolName))}
                          />
                        </div>

                        <div>
                          <TypeformPrompt
                            number="8b"
                            htmlFor="cmf-department"
                            label="Course / Department"
                            required
                            error={errors.courseDepartment}
                          />
                          <StudioSelect
                            id="cmf-department"
                            value={formData.courseDepartment}
                            onChange={(val) => updateField('courseDepartment', val)}
                            options={LMU_DEPARTMENTS}
                            placeholder="Select department"
                            hasError={Boolean(errors.courseDepartment)}
                          />
                        </div>

                        <div>
                          <TypeformPrompt
                            number="8c"
                            htmlFor="cmf-level"
                            label="Current level"
                            required
                            error={errors.level}
                          />
                          <StudioSelect
                            id="cmf-level"
                            value={formData.level}
                            onChange={(val) => updateField('level', val)}
                            options={LMU_LEVEL_OPTIONS}
                            placeholder="Select level"
                            hasError={Boolean(errors.level)}
                          />
                        </div>

                        {formData.courseDepartment === 'Other' && (
                          <div className="sm:col-span-2">
                            <TypeformPrompt
                              number="8b+"
                              htmlFor="cmf-custom-department"
                              label="Specify your course or department"
                              required
                              error={errors.customCourseDepartment}
                            />
                            <input
                              id="cmf-custom-department"
                              type="text"
                              value={formData.customCourseDepartment}
                              onChange={(e) =>
                                updateField('customCourseDepartment', e.target.value)
                              }
                              placeholder="Type your course or department..."
                              className={underlineInputClassName(
                                Boolean(errors.customCourseDepartment)
                              )}
                            />
                          </div>
                        )}

                        <div>
                          <TypeformPrompt
                            number="8d"
                            htmlFor="cmf-hall"
                            label="Hall of residence"
                            required
                            error={errors.hall}
                          />
                          <StudioSelect
                            id="cmf-hall"
                            value={formData.hall}
                            onChange={(val) => updateField('hall', val)}
                            options={LMU_HALL_OPTIONS}
                            placeholder="Select hall"
                            hasError={Boolean(errors.hall)}
                          />
                        </div>

                        <div>
                          <TypeformPrompt
                            number="8e"
                            htmlFor="cmf-room"
                            label="Room number"
                            required
                            error={errors.roomNumber}
                          />
                          <input
                            id="cmf-room"
                            type="text"
                            value={formData.roomNumber}
                            onChange={(e) => updateField('roomNumber', e.target.value)}
                            placeholder="e.g. B204"
                            className={underlineInputClassName(Boolean(errors.roomNumber))}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-7 sm:space-y-10">
                        <div>
                          <TypeformPrompt
                            number="8a"
                            htmlFor="cmf-occupation"
                            label="What is your current occupation?"
                            required
                            error={errors.currentOccupation}
                          />
                          <StudioSelect
                            id="cmf-occupation"
                            value={formData.currentOccupation}
                            onChange={(val) => updateField('currentOccupation', val)}
                            options={OCCUPATION_OPTIONS}
                            placeholder="Select your occupation"
                            hasError={Boolean(errors.currentOccupation)}
                          />
                        </div>

                        {formData.currentOccupation === 'Other' && (
                          <div>
                            <TypeformPrompt
                              number="8a+"
                              htmlFor="cmf-custom-occupation"
                              label="Specify your occupation"
                              required
                              error={errors.customOccupation}
                            />
                            <input
                              id="cmf-custom-occupation"
                              type="text"
                              value={formData.customOccupation}
                              onChange={(e) => updateField('customOccupation', e.target.value)}
                              placeholder="Type your occupation..."
                              className={underlineInputClassName(Boolean(errors.customOccupation))}
                            />
                          </div>
                        )}

                        <div>
                          <TypeformPrompt
                            number="8b"
                            label="What are your hobbies?"
                            optionalText="Select any that apply"
                          />
                          <CheckboxGrid
                            options={HOBBY_OPTIONS}
                            selected={formData.hobbies}
                            onToggle={(item) =>
                              updateField('hobbies', toggleArrayItem(formData.hobbies, item))
                            }
                            columnsClass="grid-cols-2 sm:grid-cols-3"
                            customPlaceholder="Type another hobby and press Add..."
                            onAddCustom={(val) =>
                              updateField('hobbies', toggleArrayItem(formData.hobbies, val))
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {stepIndex === 1 && (
                <motion.div
                  key="step-creative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-7 sm:space-y-11"
                >
                  <div>
                    <TypeformPrompt
                      number="9"
                      htmlFor="cmf-primary-discipline"
                      label="What's your primary creative discipline?"
                      required
                      error={errors.primaryDiscipline}
                    />
                    <StudioSelect
                      id="cmf-primary-discipline"
                      value={formData.primaryDiscipline}
                      onChange={(val) => updateField('primaryDiscipline', val)}
                      options={PRIMARY_DISCIPLINES}
                      placeholder="Choose your main discipline"
                      hasError={Boolean(errors.primaryDiscipline)}
                    />
                  </div>

                  <div>
                    <TypeformPrompt
                      number="10"
                      label="Do you practice any secondary disciplines?"
                      optionalText="Multi-select"
                      hint="Select any additional creative fields you explore."
                    />
                    <CheckboxGrid
                      options={SECONDARY_DISCIPLINE_OPTIONS}
                      selected={formData.secondaryDisciplines}
                      onToggle={(item) =>
                        updateField(
                          'secondaryDisciplines',
                          toggleArrayItem(formData.secondaryDisciplines, item)
                        )
                      }
                      columnsClass="grid-cols-2 sm:grid-cols-3"
                    />
                  </div>

                  <div>
                    <TypeformPrompt
                      number="11"
                      label="Pick up to 3 core focus areas"
                      required
                      optionalText={`${formData.coreFocusAreas.length} / 3 selected`}
                      hint="Choose up to 3 areas that best define what you build."
                      error={errors.coreFocusAreas}
                    />
                    <CheckboxGrid
                      options={CORE_FOCUS_OPTIONS}
                      selected={formData.coreFocusAreas}
                      maxSelected={3}
                      onToggle={(item) =>
                        updateField(
                          'coreFocusAreas',
                          toggleArrayItem(formData.coreFocusAreas, item, 3)
                        )
                      }
                      columnsClass="grid-cols-1 sm:grid-cols-2"
                      customPlaceholder="Type a custom focus area..."
                      onAddCustom={(val) =>
                        updateField(
                          'coreFocusAreas',
                          toggleArrayItem(formData.coreFocusAreas, val, 3)
                        )
                      }
                    />
                  </div>

                  <div>
                    <TypeformPrompt
                      number="12"
                      htmlFor="cmf-short-bio"
                      label="Tell us your story in a short bio"
                      required
                      optionalText={`${bioWordCount} / 50–150 words`}
                      hint="Write 50 to 150 words introducing your creative journey and craft."
                      error={errors.shortBio}
                    />
                    <textarea
                      id="cmf-short-bio"
                      rows={5}
                      value={formData.shortBio}
                      onChange={(e) => updateField('shortBio', e.target.value)}
                      placeholder="Write a concise summary of who you are, what you create, and where you are headed..."
                      className={`${textareaClassName(Boolean(errors.shortBio))} min-h-[140px] leading-relaxed`}
                    />
                    <div className="mt-2 flex items-center justify-between text-xs font-mono">
                      <span
                        className={
                          bioWordCount >= 50 && bioWordCount <= 150
                            ? 'text-[#FFCC00]'
                            : 'text-zinc-500'
                        }
                      >
                        {bioWordCount < 50
                          ? `${50 - bioWordCount} more words needed`
                          : bioWordCount > 150
                          ? `${bioWordCount - 150} words over limit`
                          : 'Word count meets guideline'}
                      </span>
                      <span className="text-zinc-400">{bioWordCount} words</span>
                    </div>
                  </div>

                  <div>
                    <TypeformPrompt
                      number="13"
                      label="Which tools and skills do you work with?"
                      optionalText="Checkboxes or custom tags"
                      hint="Tap the tools you use or type custom ones below."
                    />
                    <CheckboxGrid
                      options={TOOL_AND_SKILL_OPTIONS}
                      selected={formData.toolsAndSkills}
                      onToggle={(item) =>
                        updateField(
                          'toolsAndSkills',
                          toggleArrayItem(formData.toolsAndSkills, item)
                        )
                      }
                      columnsClass="grid-cols-2 sm:grid-cols-3"
                      customPlaceholder="Type a tool or skill (e.g. Blender, SQL)..."
                      onAddCustom={(val) =>
                        updateField(
                          'toolsAndSkills',
                          toggleArrayItem(formData.toolsAndSkills, val)
                        )
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 sm:gap-y-10 [&>*]:min-w-0">
                    <div>
                      <TypeformPrompt
                        number="14"
                        htmlFor="cmf-fun-fact"
                        label="Any fun thing about you?"
                        optionalText="Optional"
                      />
                      <input
                        id="cmf-fun-fact"
                        type="text"
                        value={formData.funFact}
                        onChange={(e) => updateField('funFact', e.target.value)}
                        placeholder="Something fun people learn about you..."
                        className={underlineInputClassName()}
                      />
                    </div>

                    <div>
                      <TypeformPrompt
                        number="15"
                        htmlFor="cmf-weird-fact"
                        label="Any weird thing about you?"
                        optionalText="Optional"
                      />
                      <input
                        id="cmf-weird-fact"
                        type="text"
                        value={formData.weirdFact}
                        onChange={(e) => updateField('weirdFact', e.target.value)}
                        placeholder="A quirky habit or unexpected detail..."
                        className={underlineInputClassName()}
                      />
                    </div>
                  </div>

                  <div>
                    <TypeformPrompt
                      number="16"
                      htmlFor="cmf-passion"
                      label="Passion & Drive: What inspires you?"
                      required
                      error={errors.passionDrive}
                    />
                    <textarea
                      id="cmf-passion"
                      rows={3}
                      value={formData.passionDrive}
                      onChange={(e) => updateField('passionDrive', e.target.value)}
                      placeholder="What keeps you creating and pushing forward?"
                      className={textareaClassName(Boolean(errors.passionDrive))}
                    />
                  </div>
                </motion.div>
              )}

              {stepIndex === 2 && (
                <motion.div
                  key="step-links"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-7 sm:space-y-11"
                >
                  <div className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-400">
                    All fields in this step are optional. Share whichever links or work samples you currently have, or continue straight to Consent.
                  </div>

                  <div>
                    <TypeformPrompt
                      number="17"
                      htmlFor="cmf-portfolio-url"
                      label="Where can we see your portfolio website?"
                      optionalText="Optional"
                    />
                    <input
                      id="cmf-portfolio-url"
                      type="url"
                      value={formData.portfolioWebsite}
                      onChange={(e) => updateField('portfolioWebsite', e.target.value)}
                      placeholder="https://yourportfolio.com"
                      className={underlineInputClassName()}
                    />
                  </div>

                  <div>
                    <TypeformPrompt
                      number="18"
                      label="Drop your active social links"
                      optionalText="One optional field per platform"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      {SOCIAL_PLATFORMS.map(({ key, label, placeholder }) => (
                        <div key={key}>
                          <label
                            htmlFor={`cmf-social-${key}`}
                            className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-1"
                          >
                            {label}
                          </label>
                          <input
                            id={`cmf-social-${key}`}
                            type="text"
                            value={formData.socialLinks[key]}
                            onChange={(e) =>
                              updateField('socialLinks', {
                                ...formData.socialLinks,
                                [key]: e.target.value,
                              })
                            }
                            placeholder={placeholder}
                            className={underlineInputClassName(false, true)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10 space-y-5">
                    <TypeformPrompt
                      number="19"
                      label="Share a CV or work samples"
                      optionalText="Optional"
                      hint="Upload a document or paste a link to your Drive, Notion, or reel."
                      error={errors.workSampleFile}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                      <div>
                        <input
                          id={sampleInputId}
                          type="file"
                          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                          onChange={(e) =>
                            handleSampleFileChange(e.target.files?.[0] ?? null)
                          }
                          className="sr-only"
                        />
                        <label
                          htmlFor={sampleInputId}
                          className="min-h-[50px] flex items-center justify-between gap-3 rounded-lg border border-dashed border-white/20 bg-white/[0.02] px-4 py-3 text-sm sm:text-base text-zinc-200 hover:border-[#FFCC00]/60 hover:bg-white/[0.04] transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-2.5 min-w-0">
                            <Upload className="w-4 h-4 shrink-0 text-[#FFCC00]" />
                            <span className="truncate">
                              {workSampleFile ? workSampleFile.name : 'Upload CV or sample (max 10MB)'}
                            </span>
                          </span>
                          {workSampleFile && <FileText className="w-4 h-4 shrink-0 text-zinc-400" />}
                        </label>
                        {workSampleFile && (
                          <button
                            type="button"
                            onClick={() => handleSampleFileChange(null)}
                            className="mt-2 inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-red-400 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove file</span>
                          </button>
                        )}
                      </div>

                      <div>
                        <input
                          id="cmf-sample-link"
                          type="url"
                          value={formData.workSampleLink}
                          onChange={(e) => updateField('workSampleLink', e.target.value)}
                          placeholder="Or paste Drive / Notion / reel link..."
                          className={underlineInputClassName(false, true)}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {stepIndex === 3 && (
                <motion.div
                  key="step-consent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-7 sm:space-y-11"
                >
                  <div>
                    <TypeformPrompt
                      number="20"
                      label="What do you want from the community?"
                      required
                      hint="Choose as many as you like."
                      error={errors.communityExpectations}
                    />
                    <CheckboxGrid
                      options={EXPECTATION_OPTIONS}
                      selected={formData.communityExpectations}
                      onToggle={(item) =>
                        updateField(
                          'communityExpectations',
                          toggleArrayItem(formData.communityExpectations, item)
                        )
                      }
                      columnsClass="grid-cols-2 sm:grid-cols-3"
                    />
                  </div>

                  <div>
                    <TypeformPrompt
                      number="21"
                      label="How can you contribute to CMF?"
                      required
                      hint="Choose as many as you like."
                      error={errors.communityContributions}
                    />
                    <CheckboxGrid
                      options={CONTRIBUTION_OPTIONS}
                      selected={formData.communityContributions}
                      onToggle={(item) =>
                        updateField(
                          'communityContributions',
                          toggleArrayItem(formData.communityContributions, item)
                        )
                      }
                      columnsClass="grid-cols-2 sm:grid-cols-3"
                    />
                  </div>

                  {/* Optional Consent & 4:5 Portrait Upload */}
                  <div className="pt-8 sm:pt-10 border-t border-white/10 space-y-7 sm:space-y-10">
                    <div>
                      <TypeformPrompt
                        number="22"
                        label="Upload a 4:5 portrait photo"
                        optionalText="Optional"
                        hint="Portrait ratio (4:5), JPG or PNG, max 5MB."
                        error={errors.photoFile}
                      />

                      <div className="flex flex-row items-center gap-4 sm:gap-5">
                        <div className="w-24 sm:w-32 aspect-[4/5] shrink-0 overflow-hidden rounded-lg border border-white/15 bg-[#141414]">
                          {photoPreviewUrl ? (
                            <img
                              src={photoPreviewUrl}
                              alt="4:5 profile preview"
                              className="h-full w-full object-cover object-[center_22%]"
                            />
                          ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center px-2 text-center text-zinc-500">
                              <ImagePlus className="w-5 h-5 mb-1.5" />
                              <span className="font-mono text-[10px] uppercase tracking-wider">
                                4:5 Ratio
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0 space-y-2.5 sm:space-y-3">
                          <input
                            id={photoInputId}
                            type="file"
                            accept="image/*"
                            onChange={(e) => handlePhotoChange(e.target.files?.[0] ?? null)}
                            className="sr-only"
                          />
                          <label
                            htmlFor={photoInputId}
                            className="min-h-[46px] w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-4 sm:px-5 py-2.5 text-xs sm:text-base font-medium text-zinc-200 hover:border-[#FFCC00]/60 hover:bg-white/[0.06] hover:text-white transition-colors cursor-pointer"
                          >
                            <Upload className="w-4 h-4 shrink-0 text-[#FFCC00]" />
                            <span className="truncate">
                              {photoFile ? 'Replace photo' : 'Choose portrait'}
                            </span>
                          </label>

                          {photoFile && (
                            <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-400">
                              <span className="truncate max-w-[160px] sm:max-w-[220px]">
                                {photoFile.name}
                              </span>
                              <button
                                type="button"
                                onClick={() => handlePhotoChange(null)}
                                className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 cursor-pointer"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Remove</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Separate Feature Consent Checkbox */}
                    <div>
                      <TypeformPrompt
                        number="23"
                        label="Website feature permission"
                        optionalText="Optional"
                      />
                      <label
                        className={`min-h-[52px] flex items-start gap-2.5 sm:gap-3.5 rounded-lg border p-3.5 sm:p-4 transition-all cursor-pointer select-none ${
                          formData.featureConsent
                            ? 'border-[#FFCC00] bg-[#FFCC00]/[0.12] text-white'
                            : 'border-white/15 bg-white/[0.03] text-zinc-200 hover:border-white/35 hover:bg-white/[0.06]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.featureConsent}
                          onChange={(e) => updateField('featureConsent', e.target.checked)}
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={`mt-0.5 flex h-[18px] w-[18px] sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded font-mono text-[11px] sm:text-xs font-bold transition-colors ${
                            formData.featureConsent
                              ? 'border border-[#FFCC00] bg-[#FFCC00] text-zinc-950'
                              : 'border border-white/25 bg-black/40 text-zinc-400'
                          }`}
                        >
                          <span className="hidden sm:inline">Y</span>
                          {formData.featureConsent && <Check className="sm:hidden h-3 w-3 stroke-[3]" />}
                        </span>
                        <span className="text-xs sm:text-base leading-relaxed flex-1 min-w-0">
                          I grant Creative Minds' Forum permission to feature my profile and photo on the official website.
                        </span>
                        {formData.featureConsent && (
                          <Check className="hidden sm:block mt-1 h-4 w-4 shrink-0 text-[#FFCC00] stroke-[2.75]" />
                        )}
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {submitError && (
              <div className="mt-8 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {submitError}
              </div>
            )}
          </div>

          {/* Typeform Action Bar */}
          <div className="border-t border-white/10 px-4 sm:px-10 py-4 sm:py-5 bg-[#0D0D0D] flex items-center justify-between gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => {
                setErrors({});
                setStepIndex((prev) => Math.max(prev - 1, 0));
                scrollToFormTop();
              }}
              disabled={stepIndex === 0 || isSubmitting}
              className="min-h-[48px] flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-white/30 hover:text-white disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <div className="flex items-center gap-3.5 flex-[2] sm:flex-initial">
              {stepIndex < FORM_STEPS.length - 1 ? (
                <>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFCC00] px-5 sm:px-7 py-2.5 text-sm sm:text-base font-bold text-zinc-950 transition-colors hover:bg-[#FFE066] cursor-pointer"
                  >
                    <span>{stepIndex === 2 ? 'Continue to Consent' : 'OK, Continue'}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <span>press Enter</span>
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </span>
                </>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFCC00] px-5 sm:px-7 py-2.5 text-sm sm:text-base font-bold text-zinc-950 transition-colors hover:bg-[#FFE066] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Bio-Data</span>
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
    </div>
  );
}
