namespace INT01_Flowcase_UserProfile.Models.Flowcase
{
    public record CV
    {
        public required string user_id { get; init; }
        public required string name { get; init; }
        public List<Qualification> key_qualifications { get; init; } = new List<Qualification>();
        public List<Certification> certifications { get; init; } = new List<Certification>();
        public List<Course> courses { get; init; } = new List<Course>();
        public List<Project> project_experiences { get; init; } = new List<Project>();
        public List<Technology> technologies { get; init; } = new List<Technology>();
    }

    public record Qualification
    {
        public FlowcaseField? label { get; init; }
        public FlowcaseField? long_description { get; init; }
        public bool disabled { get; init; }
    }

    public record Certification
    {
        public required FlowcaseField name { get; init; }
        public bool disabled { get; init; }
    }

    public record Course
    {
        public required FlowcaseField name { get; init; }
        public bool disabled { get; init; }
    }

    public record Project
    {
        public FlowcaseField? customer { get; init; }
        public FlowcaseField? description { get; init; }
        public FlowcaseField? long_description { get; init; }
        public FlowcaseField? industry { get; init; }
        public string? month_from { get; init; }
        public string? month_to { get; init; }
        public string? year_from { get; init; }
        public string? year_to { get; init; }
        public List<ProjectRole> roles { get; init; } = new List<ProjectRole>();
        public List<ProjectSkill> project_experience_skills { get; init; } = new List<ProjectSkill>();
        public bool disabled { get; init; }
    }

    public record ProjectRole
    {
        public FlowcaseField? name { get; init; }
    }

    public record ProjectSkill
    {
        public FlowcaseField? tags { get; init; }
    }

    public record Technology
    {
        public List<TechnologySkill> technology_skills { get; init; } = new List<TechnologySkill>();
    }

    public record TechnologySkill
    {
        public FlowcaseField? tags { get; init; }
    }

    public record FlowcaseField
    {
        public string? no { get; init; }
    }
}
